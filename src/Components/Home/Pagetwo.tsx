import {
    Container,
    Center,
    Box,
    Text,
    Card,
    CardBody,
    FormControl,
    Select,
    Image,
    FormLabel
} from "@chakra-ui/react"

export const Pagetwo: React.FC = () => {
    return (
        <Container>
            <Center>
                <Image
                    src="/assets/images/icon.jpg"
                    alt="icoin"
                   objectFit="cover"
                    borderRadius='full'
                    boxSize='100px'
                />
            </Center>
            <Center mt={"1rem"}>
                <video width="640" height="360" controls playsInline autoPlay muted loop>
                    <source src="/assets/video/vid2.mp4" type="video/mp4" />
                </video>
            </Center>

            <Card mt={"2rem"}>
                <CardBody>
                    <Text fontSize={"0.8rem"}>Now we are going to ask you 3 simple questions</Text>
                </CardBody>
            </Card>
         
            <Center mt={"1rem"}>
                <Card>
                    <CardBody>
                        <Text fontSize={"0.8rem"}>Do not worry, we are not storing any personal data - this just allows us to calculate how much you and your friends can help with climate change</Text>
                    </CardBody>
                </Card>
            </Center>

            <Card  mt={"1rem"}>
                <CardBody>
                    <form>
                        <FormControl>
                            <FormLabel fontSize={"0.8rem"}>Which of these describes you?</FormLabel>
                            <Select fontSize={"0.8rem"}>
                                <option value={""}>please choose</option>
                                <option value={""}>Secondary School (11 - 16yrs)</option>
                                <option value={""}>A-level or College (16-18yrs)</option>
                                <option value={""}>University Student  (18-22yrs)</option>
                            </Select>
                        </FormControl>
                    </form>
                </CardBody>
            </Card>
            
        </Container>
    )
}