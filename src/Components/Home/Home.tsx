import {
    Box,
    Text,
    Container,
    Image,
    Button,
    Select,
    FormControl,
    Center,
    Card,
    CardBody,
    useBreakpointValue
} from "@chakra-ui/react";
import {GrFormNext} from "react-icons/gr"
import { ChangeEvent, useState, useRef, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
export const HomePage: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>()
    const isMobile = useBreakpointValue({ base: true, sm: false, md: false, lg: false, xl: false });

    const [time,setTime] = useState("")
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTime(e.target.value)
    }
    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
       e.preventDefault()
    }
    useEffect(() => {
        sessionStorage.setItem("page", "/");
    }, [])
   
    if(isMobile){
        console.log("mobile")
    }else{
        console.log("desktop")
    }
    
    return (
        <Container
           
        >
            <Center>
                <Image
                    src="/assets/images/icon2.png"
                    alt="icoin"
                   objectFit="cover"
                    boxSize='120px'
                />
            </Center>
            <Center mt={"2rem"} >
                <video playsInline autoPlay muted loop>
                    <source src="/assets/video/vid1.mp4" type="video/mp4" />
                </video>
            </Center>

            <Card mt={"1rem"} bg={"#0174BE"} color={"white"}>
                <CardBody>
                    <Center>
                        <Box>
                            <Text fontSize={"0.8rem"} textAlign={"center"}>Do you know smartphones </Text>
                            <Text fontSize={"0.8rem"} textAlign={"center"}>increases climate change? </Text>
                         </Box>
                   </Center>
                </CardBody>
            </Card>
            {/* {
                isMobile && (
                    <Center>
                        <Box mt={"1rem"} bg={"#0174BE"} color={"white"}>
                            <Center>
                                    <Text fontSize={"0.8rem"} textAlign={"center"}>Do you know smartphones increases climate change?</Text>
                            </Center>
                        </Box>
                    </Center>
                )
            } */}
         
            <Card mt={"1rem"} bg={"#0174BE"} color={"white"}>
                <CardBody>
                    <Center>
                        <Box>
                            <Text fontSize={"0.8rem"} textAlign={"center"}>Want to know how much yours </Text>
                            <Text>does - and know you can help?</Text>
                        </Box>
                    </Center>
                </CardBody>
            </Card>

            <Card mt={"1rem"} bg={"#FFA33C"} color={"white"}>
                <CardBody>
                    <Center>
                         <Text fontSize={"0.8rem"} textAlign={"center"}>How long each day do you use it?</Text>
                   </Center>
                </CardBody>
            </Card>
               
            <form style={{marginTop:"1rem"}}>
                <FormControl>
                    <Select
                        fontSize={"0.8rem"}
                        value={time}
                        onChange={handleChange}
                        style={{ borderColor: "blue", backgroundColor: "", textAlign: "center" }}
                        iconSize="6rem"
                        iconColor="blue"
                        icon={<AiOutlineCaretDown/>}
                    >
                        <option value={""} style={{textAlign:"center"}}>please choose</option>
                        <option value={"2m"}>2 minutes</option>
                        <option value={"10m"}>10 minutes</option>
                        <option value={"15m"}>15 minutes</option>
                        <option value={"30m"}>30 minutes</option>
                        <option value={"1hr"}>1 hour</option>
                        <option value={"2hr"}>2 hours</option>
                        <option value={"3hr"}>3 hours</option>
                </Select>
                </FormControl>
            </form>  
            
            <Center mt={"1rem"} mb={"1.7rem"}>
                <Button
                    rightIcon={<GrFormNext />} 
                    colorScheme='blue'
                    variant='outline'
                    as={"a"} href={time.length<=0?"#":`/pagetwo?time=${time}`}
                    isDisabled={time.length <= 0}
                >
                   next
                </Button>
            </Center>
        </Container>

    )
}