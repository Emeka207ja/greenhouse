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
                <Text textAlign={"center"}>Blue Sky is the creation of two academics and two students at the University of Sunderland, in North East England.  </Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}>Academic tutor and environmental journalist Paul Taylor took the idea to Computer Science lecturer Randa Almadhoun. </Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}>With encouragement and support from senior colleagues, Randa and Paul were able to turn it into a practical development project for Computer Science Masters students Chinenye Onoh and Sahni Roushan.  </Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}> While Paul brought his creative skills to bear in setting out the look and functionality of Blue Sky, Chinenye and Sahni handled all the computer programming and coding to bring it to life, under Randa’s technical supervision.</Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}> What the team created over four months of hard work is the app you are using now.</Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}>But there’s more to do. </Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}>What the team have developed so far is a small-scale app covering just the Tyne and Wear area, to ‘prove the concept’ of Blue Sky. </Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}>But they plan to expand its scope to cover all of the UK, and help people right across the nation make simple choices which will help fight climate change.  
                </Text>
            </Center>

            <Center mt={"0.5rem"}>
                <Text textAlign={"center"}>All that’s needed is a little more Blue Sky thinking! </Text>
            </Center>

            <BackToTopButton route={pathd}/>
        </Container>
    )
}