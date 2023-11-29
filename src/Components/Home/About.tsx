import {
    Center,
    Card,
    CardBody,
    Box,
    Container,
    Text,
    Image,
    Heading
} from "@chakra-ui/react";
import BackToTopButton from "../BackToTop";
import { useState,useEffect } from "react";
export const About: React.FC = () => {
    const [pathd, setPAth] = useState<string|null>(null)
    useEffect(() => {
        
        if (sessionStorage.length > 0) {
            const route = sessionStorage.getItem("page")
            setPAth(route)
        }
    }, [])
    return (
        <Container>
            <Center>
               <Image
                src="/assets/images/icon2.png"
                alt="icoin"
                objectFit="cover"
                borderRadius='full'
                boxSize='100px'
                />
            </Center>
            <Heading textAlign={"center"} color={"#0174BE"} fontSize={"1.5rem"}>Making climate action easy</Heading>
            <Heading textAlign={"center"} fontSize={"1rem"} mt={"0.5rem"}>ABOUT BLUE SKY </Heading>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}>When people unite and act together, they take control of their own
                    destiny.
                </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>With a climate crisis threatening all of us, now is a moment to do
                    exactly that.
                </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>
                    If you feel there’s nothing you can do to help, ask yourself this:
                    who actually creates and destroys governments, giant companies
                    or even whole industries?
                </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}> Answer: we do – the people!</Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}> What the team created over four months of hard work is the app you are using now.</Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>But there’s more to do. </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>The problem is too many of us think we are helpless to affect the
                    climate crisis: we’ve been encouraged to forget our ‘people power’.
                </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>BlueSky is a tool to help reconnect us, at a moment when the
                    choices we all make now will shape all our futures – maybe even
                    our survival. 
                </Text>
            </Center>

            <Center  mb={"2rem"} mb={"2rem"}>
                <Text textAlign={"center"}>It is designed to show you how your simple, small choice can very
                    quickly create a huge impact if other people also act on it.</Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>It doesn’t take huge personal sacrifice, just a shift in our priorities.</Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>For example, did you know that if everyone aged 10 and up in the
                    UK watched just one hour’s less TV each week, we’d stop the
                    release of well over half a million tonnes of greenhouse gases.
                </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>That’s like taking more than 122,000 cars off the road!
                </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>One simple, small choice shared by everyone = a big impact.
                </Text>
            </Center>

            <Center  mb={"2rem"}>
                <Text textAlign={"center"}>* BlueSky has been developed as a Masters in Computer
                    Science project by a team of two teachers and two students at
                    the University of Sunderland: academic tutor Paul Taylor,
                </Text>
            </Center>
            
            <BackToTopButton route={pathd}/>
        </Container>
    )
}