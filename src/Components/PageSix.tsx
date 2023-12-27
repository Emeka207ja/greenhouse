import {
    Box,
    Container,
    Center,
    Image,
    Text,
    Card,
    CardBody,
    Button
} from "@chakra-ui/react"
import { useSearchParams } from "next/navigation"
import { phoneUsageReduced,carbonCost,carbonTonne } from "@/utils/phoneUsageReduced"
import { useState, useEffect } from "react"
import EmissionCarNtrashEquivalence from "@/utils/carNtrash"

export const PageSix: React.FC = () => {
    const searchParams = useSearchParams()
    const sch = searchParams.get("sch")
    const town = searchParams.get("town")
    const selected = searchParams.get("selected")

    const [time, setTime] = useState("")
    const [cost, setCost] = useState(1)
    const [totalTonne, setTotalTonne] = useState(1)
    const [emisionMsg,setEmisionMsg] = useState("")
    
    useEffect(() => {
        if (selected && town && sch) {
            setTime(phoneUsageReduced(selected))
            setCost(carbonCost(selected))
            const total = parseFloat(carbonTonne(selected,town,sch))
            setTotalTonne(total)
            setEmisionMsg(EmissionCarNtrashEquivalence(total))
        } else {
            setTime(phoneUsageReduced("default time"))
            setCost(carbonCost("4m"))

        }
    },[selected,town,sch])
    return (
        <Container
             fontFamily={"Bree Serif"}
        >
            <Center>
                <Image
                    src="/assets/images/logo4.png"
                    alt="logo"
                    objectFit="contain"
                    boxSize='160px'
                />
           </Center>
           <Center>
                <Text
                    color="#d90429"
                    fontSize={"1.5rem"}
                >YOUR CHOICE MAKES</Text>
            </Center>
            <Center>
                <Text
                    color="#d90429"
                    fontSize={"1.5rem"}
                > A DIFFERENCE</Text>
            </Center>

            <Card
                mt={"1rem"}
                bg={"#FF8400"}
                color={"white"}
            >
                <CardBody
                    fontSize={"1rem"}
                >
                    <Center>
                        <Box
                            textAlign={"center"}
                        >
                            <Text>If you used your phone for just</Text>
                            <Text>
                                <span style={{ color: "#fcca46" }}>({time}) { ""}</span>
                                <span> over a year</span>
                            </Text>

                            <Text>
                                <span>you would stop</span>{ ""}
                                <span style={{ color: "black" }}> {cost} KILOGRAMS</span>
                            </Text>
                            <Text>Of Greenhouse Gases</Text>
                         </Box>
                   </Center>
                   
                </CardBody>
            </Card>

             <Card
                mt={"1rem"}
                bg={"#FF8400"}
                color={"white"}
            >
                <CardBody
                    fontSize={"1rem"}
                >
                    <Center>
                        <Box
                            textAlign={"center"}
                        >
                            <Text>If every other <span style={{ color: "#fcca46" }}>({sch})</span></Text> 
                            <Text>
                                <span>in</span> {""}
                                <span style={{ color: "#fcca46" }}>({town}) { ""}</span>
                                <span>did the same  </span>
                            </Text>
                            <Text>together you would stop an amazing</Text>
                             <Text>
                                <span style={{ color: "black" }}>({totalTonne} tonnes)</span>
                                <span > of Greenhouse</span>
                            </Text>
                            <Text> Gases</Text>
                        </Box>
                   </Center>
                   
                </CardBody>
            </Card>
            <Card
                mt={"1rem"}
                bg={"#306e8a"}
                color={"#ffc300"}
                fontSize = "1.1rem"
            >
                <CardBody>
                    <Text textAlign={"center"}>{emisionMsg}</Text>                   
                </CardBody>
            </Card>

            <Center>
                <Image src = "/assets/images/trashncar.png"/>
            </Center>

            <Center
                mt = {"1rem"}
            >
                <Box
                    fontSize={"1rem"}
                    fontStyle={"bold"}
                >
                    <Text>That means you can help heal</Text>
                     <Text textAlign={"center"}>our planet which is...</Text>
                </Box>
            </Center>
            <Center
                fontSize={"1.9rem"}
                fontStyle={"bold"}
            >
                <Text  color="#d62828">Amazing!</Text>
            </Center>
            <Button
                w="full"
                textColor={"white"}
                bg={"#023e8a"}
                mt={"1rem"}
                mb={"2rem"}
                fontSize = "1.3rem"
            >And that is not all...</Button>
        </Container>
    )
}