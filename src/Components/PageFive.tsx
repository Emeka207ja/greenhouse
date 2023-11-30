import {
    Container,
    Center,
    Box,
    Card,
    CardBody,
    Heading,
    Text,
    Image,
    Select,
    FormControl
} from "@chakra-ui/react"
import { AiOutlineCaretDown } from "react-icons/ai";
export const PageFive: React.FC = () => {
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

            <Heading textAlign={"center"}>Just an idea</Heading>
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

            <Card
                mt={"0.6rem"}
            >
                <CardBody
                    bg={"#306e8a"}
                >
                    <Box
                        color={"white"}
                        fontSize={"0.9rem"}
                        textAlign={"center"}
                    >
                        <Text>How about if you used your phone a </Text>
                        <Text>bit less each day - so you use a bit less</Text>
                        <Text>electricity each day too</Text>
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
                        <Text>Give it a go - how much might you</Text>
                        <Text>reduce your daily phone call</Text>
                    </Box>
                </CardBody>
            </Card>

             <form style={{marginTop:"1rem", marginBottom:"2rem"}}>
                <FormControl>
                    <Select
                        fontSize={"1.2rem"}
                      
                        style={{ borderColor: "#306e8a", backgroundColor: "", textAlign: "center" }}
                        iconSize="6rem"
                        iconColor="#306e8a"
                        icon={<AiOutlineCaretDown/>}
                    >
                        <option value={""} style={{textAlign:"center"}}>please choose</option>
                        <option value={"10m"}>10 mins less per day</option>
                        <option value={"15m"}>15 mins less per day</option>
                        <option value={"30m"}>30 mins less per day</option>
                        <option value={"1hr"}>1 hour less per day</option>
                </Select>
                </FormControl>
            </form>  
        </Container>
    )
}