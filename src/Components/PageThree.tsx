import {
    Box,
    Container,
    Center,
    Image,
    Text,
    Card,
    CardBody,
    Button
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import {useState,useEffect,useLayoutEffect} from "react"


export const PageThree: React.FC = () => {
    const [selectedTime,setSelectedTime] = useState("")
    const searchParams = useSearchParams()
    const time = searchParams.get("time")
    const sch = searchParams.get("sch")
    const town = searchParams.get("town")
    const area = searchParams.get("area")

  

    useEffect(() => {
        switch (time) {
            case "30m":
                setSelectedTime("30 minutes")
                break;
        
            case "2m":
                setSelectedTime("2 minutes")
                break;
            
            case "10m":
                setSelectedTime("10 minutes")
                break;
            
            case "15m":
                setSelectedTime("15 minutes")
                break;
            
            case "1hr":
                setSelectedTime("1 hour")
                break;
            
            case "2hr":
                setSelectedTime("2 hours")
                break;
            
            case "3hr":
                setSelectedTime("3 hours")
                break;
        
            default:
                break;
        }
    }, [time])
    console.log(selectedTime)
    return (
        <Container>
            <Center>
                <Image
                    src="/assets/images/logo3.png"
                    alt="icoin"
                   objectFit="contain"
                    boxSize='160px'
                />
            </Center>
            <Center>
                <Box
                    fontSize={"1.2rem"}
                    textAlign={"center"}
                    fontFamily={"Bree Serif"}
                >
                    Thank You
                </Box>
            </Center>
            
            <Center>
                <Box>
                    <Box>
                        <Text
                            fontSize={"1rem"}
                            textAlign={"center"}
                            fontFamily={"Bree Serif"}
                        >Based on your answers we can,</Text>
                   </Box>
                    <Box>
                        <Text
                            fontSize={"1.2rem"}
                            textAlign={"center"}
                            fontFamily={"Bree Serif"}
                        >We can calculate that:</Text>
                  </Box>
               </Box>
            </Center>
            
            <Card bg={"#FF8400"} mt={"2rem"}>
                <CardBody>
                    <Center>
                        <Box>
                            <Text
                                fontSize={"1rem"}
                                textAlign={"center"}
                                fontFamily={"Bree Serif"}
                                color={"white"}>Your Phone is causing  <span style={{ color: "black" }}>1.25 Tonnes</span> </Text>
                            <Text
                                fontSize={"1rem"}
                                textAlign={"center"}
                                fontFamily={"Bree Serif"}
                                color={"white"}
                            >of greenhouse gas each year </Text>
                        </Box>
                    </Center>
                </CardBody>
            </Card>

            <Card bg={"#FF8400"} mt={"2rem"}>
                <CardBody>
                    <Center>
                        <Box>
                            <Text
                                fontSize={"1rem"}
                                textAlign={"center"}
                                fontFamily={"Bree Serif"}
                                color={"white"}>If Every other    <span style={{ color: "yellow" }}>{sch} School</span>
                            </Text>

                            <Text
                                fontSize={"1rem"}
                                textAlign={"center"}
                                fontFamily={"Bree Serif"}
                                color={"white"}><span style={{ color: "yellow" }}>Pupil in {area }</span>  is also using their 
                            </Text>

                            <Text
                                fontSize={"1rem"}
                                textAlign={"center"}
                                fontFamily={"Bree Serif"}
                                color={"white"}>phone for <span style={{ color: "yellow" }}>{selectedTime} a day</span>,together you  
                            </Text>

                            <Text
                                fontSize={"1rem"}
                                textAlign={"center"}
                                fontFamily={"Bree Serif"}
                                color={"white"}>Are causing <span style={{ color: "black" }}>864 Tonnes</span>
                            </Text>
                        </Box>
                    </Center>
                </CardBody>
            </Card>

            <Card
                bg={"black"}
                mt={"2rem"}
            >
                <CardBody>
                    <Center>
                        <Box
                            color={"yellow"}
                            fontSize={"1rem"}
                            textAlign={"center"}
                            fontFamily={"Bree Serif"}
                        >
                            <Text>Thats the same as 500</Text>
                            <Text>average UK cars produced</Text>
                        </Box>
                    </Center>
                </CardBody>
            </Card>
            <Center
                pos={"relative"}
                bottom={"2rem"}
            >
                <Image
                    src="/assets/images/phone.png"
                    alt="icoin"
                   objectFit="contain"
                    boxSize='200px'
                />
            </Center>
            <Center >
                <Button
                    bg="#03045e"
                    textColor={"white"}
                    pos={"relative"}
                    bottom={"4.5rem"}
                >How is that possible?</Button>
           </Center>
        </Container>
    )
}