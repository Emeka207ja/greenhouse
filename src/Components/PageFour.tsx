import {
    Box,
    Container,
    Center,
    Image,
    Heading,
    Card,
    CardBody,
    Text,
    Button
} from "@chakra-ui/react"

import { useSearchParams } from "next/navigation"
export const PageFour: React.FC = () => {
    const searchParams = useSearchParams()
    const sch = searchParams.get("sch")
    const town = searchParams.get("town")
    return (
        <Container>
            <Center>
                <Image
                    src="/assets/images/logo4.png"
                    alt="icoin"
                   objectFit="contain"
                    boxSize='160px'
                />
            </Center>
            <Heading
                textAlign={"center"}
                fontFamily={"Bree Serif"}
            >
                The Problem is ....
            </Heading>
            <Center mt={"2rem"} pos={"relative"} bottom={"0.3rem"} >
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    height="360"
                >
                    <source src="/assets/video/smokevid.mp4" type="video/mp4" />
                </video>
            </Center>
            <Heading
                textAlign={"center"}
               fontFamily={"Bree Serif"}
                textColor={"red"}
            >
                ELECTRICITY
            </Heading>

            <Card>
                <CardBody
                    bg={"#306e8a"}
                >
                    <Box
                        color={"white"}
                        fontSize={"0.9rem"}
                        textAlign={"center"}
                    >
                        <Text>your phone - and the huge network it </Text>
                        <Text>relies on - need electricity to work</Text>
                    </Box>
                </CardBody>
            </Card>


            <Card mt={"0.6rem"}>
                <CardBody
                   bg={"#FF8400"}
                >
                    <Box
                        color={"black"}
                        fontSize={"0.9rem"}
                        textAlign={"center"}
                    >
                        <Text>Generating electricity produces</Text>
                        <Text>Greenhouse Gases, which are heating</Text>
                        <Text>the Earth to dangerous levels and </Text>
                        <Text>causing things like heatwaves,wildfires </Text>
                        <Text>hurricanes and flooding </Text>
                    </Box>
                </CardBody>
            </Card>

            <Card
                mt={"0.6rem"}
            >
                <CardBody
                    bg={"#306e8a"}
                >
                    <Box
                        color={"white"}
                        fontSize={"0.8rem"}
                        textAlign={"center"}
                    >
                        <Text>Greenhouse Gases are a threat to all life</Text>
                        <Text>on our planet - including us</Text>
                    </Box>
                </CardBody>
            </Card>

             <Card mt={"0.6rem"}>
                <CardBody
                   bg={"#FF8400"}
                >
                    <Box
                        textColor={"black"}
                        fontSize={"1rem"}
                        textAlign={"center"}
                    >
                        <Text>But you can help protect the</Text>
                        <Text>planet and yourself</Text>
                    </Box>
                </CardBody>
            </Card>

             <Card mt={"0.6rem"}>
                <CardBody
                   bg={"#FF8400"}
                >
                    <Box
                        textColor={"black"}
                        fontSize={"1rem"}
                        textAlign={"center"}
                    >
                        <Text>Wanna see how?</Text>
                    </Box>
                </CardBody>
            </Card>

            <Button
                mt={"1rem"}
                textColor={"white"}
                bg={"#023e8a"}
                w={"full"}
                mb={"2rem"}
                as={"a"}
                // href={`/pagefive?sch=${sch}&town=${town}`}
                href="#"
            >show me!</Button>
        </Container>
    )
}