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
import { ChangeEvent, useState } from "react";
export const HomePage: React.FC = () => {
    const [time,setTime] = useState("")
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTime(e.target.value)
    }
    const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
       e.preventDefault()
    }
    return (
        <Container
           
        >
            <Center>
                <Image
                    src="/assets/images/icon.jpg"
                    alt="icoin"
                   objectFit="cover"
                    borderRadius='full'
                    boxSize='100px'
                />
            </Center>
            <Center mt={"2rem"} >
                <video width="640" height="360" playsInline autoPlay muted loop style={{borderRadius:"1.5rem"}}>
                    <source src="/assets/video/vid1.mp4" type="video/mp4" />
                </video>
            </Center>

            <Card mt={"1rem"}>
                <CardBody>
                    <Text fontSize={"0.8rem"}>Do you know smartphones increases climate change?</Text>
                </CardBody>
            </Card>
         
            <Card mt={"0.5rem"}>
                <CardBody>
                    <Text fontSize={"0.8rem"}>Want to know how much yours does - and know you can help?</Text>
                </CardBody>
            </Card>

            <Card mt={"0.5rem"}>
                <CardBody>
                    <Text fontSize={"0.8rem"}>How long each day do you use it?</Text>
                </CardBody>
            </Card>
               
            <Card mt={"0.4rem"}>
                <CardBody>
                    <form>
                        <FormControl>
                            <Select fontSize={"0.8rem"} value={time} onChange={handleChange}>
                                <option value={""}  >please select</option>
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
            
            <Center mt={"1rem"}>
                <Button
                    rightIcon={<GrFormNext />} 
                    colorScheme='blue' variant='outline'
                    as={"a"} href={time.length<=0?"#":`/pagetwo?time=${time}`}
                    isDisabled={time.length <= 0}
                >
                   next
                </Button>
            </Center>
        </Container>

    )
}