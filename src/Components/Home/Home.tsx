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
                    src="/assets/images/logo3.png"
                    alt="icoin"
                   objectFit="contain"
                    boxSize='160px'
                />
            </Center>
            <Center mt={"2rem"} pos={"relative"} bottom={"0.3rem"} >
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    height="360"
                >
                    <source src="/assets/video/vd3.mp4" type="video/mp4" />
                </video>
            </Center>

            <Card mt={"1rem"} bg={"#306e8a"} color={"white"}>
                <CardBody>
                    <Center>
                        <Box>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"}>Do you know smartphones </Text>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"}>increases climate change? </Text>
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
         
            <Card mt={"1rem"} bg={"#306e8a"} color={"white"}>
                <CardBody>
                    <Center>
                        <Box>
                            <Text fontSize={"1rem"} textAlign={"center"} fontFamily={"Bree Serif"}>Want to know how much yours </Text>
                            <Text fontSize={"1rem"} textAlign={"center"} fontFamily={"Bree Serif"}>does - and know you can help?</Text>
                        </Box>
                    </Center>
                </CardBody>
            </Card>

            <Card mt={"1rem"} bg={"#FF8400"} color={"white"}>
                <CardBody>
                    <Center>
                         <Text fontSize={"1.1rem"} textAlign={"center"}>How long each day do you use it?</Text>
                   </Center>
                </CardBody>
            </Card>
               
            <form style={{marginTop:"1rem"}}>
                <FormControl>
                    <Select
                        fontSize={"1.2rem"}
                        value={time}
                        onChange={handleChange}
                        style={{ borderColor: "#306e8a", backgroundColor: "", textAlign: "center" }}
                        iconSize="6rem"
                        iconColor="#306e8a"
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
                    color={"white"}
                    as={"a"} href={time.length<=0?"#":`/pagetwo?time=${time}`}
                    isDisabled={time.length <= 0}
                    bg={"#306e8a"}
                >
                   next
                </Button>
            </Center>
        </Container>

    )
}