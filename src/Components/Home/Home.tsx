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
    CardBody
} from "@chakra-ui/react";
import {GrFormNext} from "react-icons/gr"
import { ChangeEvent, useState,useRef,useEffect } from "react";
export const HomePage: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>()

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
   
    
    return (
        <Container
           
        >
            <Center>
                <Image
                    src="/assets/images/icon2.png"
                    alt="icoin"
                   objectFit="cover"
                    borderRadius='full'
                    boxSize='100px'
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
                         <Text fontSize={"0.8rem"} textAlign={"center"}>Do you know smartphones increases climate change?</Text>
                   </Center>
                </CardBody>
            </Card>
         
            <Card mt={"1rem"} bg={"#0174BE"} color={"white"}>
                <CardBody>
                    <Center>
                        <Text fontSize={"0.8rem"} textAlign={"center"}>Want to know how much yours does - and know you can help?</Text>
                    </Center>
                </CardBody>
            </Card>

            <Card mt={"1rem"} bg={"#0174BE"} color={"white"}>
                <CardBody>
                    <Center>
                         <Text fontSize={"0.8rem"} textAlign={"center"}>How long each day do you use it?</Text>
                   </Center>
                </CardBody>
            </Card>
               
            <Card mt={"0.4rem"} bg={"#FFA33C"} >
                <CardBody>
                    <form>
                        <FormControl>
                            <Select fontSize={"0.8rem"} value={time} onChange={handleChange}>
                                <option value={""}>please select</option>
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
                </CardBody>
            </Card>
            
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