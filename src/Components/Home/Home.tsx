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

export const HomePage: React.FC = () => {
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
            <Center mt={"2rem"}>
                <Image
                    borderRadius={"md"}
                    objectFit="cover"
                    src="/assets/images/kids2.jpeg"
                    width={"20rem"}
                />
            </Center>

            <Center mt={"2rem"}>
                <Card>
                    <CardBody>
                        <Text fontSize={"0.8rem"}>Do you know smartphones increases climate change?</Text>
                    </CardBody>
                </Card>
            </Center>

            <Center mt={"1rem"}>
                <Card>
                    <CardBody>
                        <Text fontSize={"0.8rem"}>Want to know how much yours does - and know you can help?</Text>
                    </CardBody>
                </Card>
            </Center>

            <Card mt={"1rem"}>
                <CardBody>
                    <Text fontSize={"0.8rem"}>How long each day do you use it?</Text>
                </CardBody>
            </Card>
               
            <Card mt={"1rem"}>
                <CardBody>
                    <form>
                        <FormControl>
                            <Select fontSize={"0.8rem"}>
                                <option value={""}  >please select</option>
                                <option>2 minutes</option>
                                <option>10 minutes</option>
                                <option>15 minutes</option>
                                <option>30 minutes</option>
                                <option>1 hour</option>
                                <option>2 hours</option>
                                <option>3 hours</option>
                        </Select>
                        </FormControl>
                    </form>
                </CardBody>
            </Card>
            
            <Center mt={"1rem"}>
                <Button rightIcon={<GrFormNext />} colorScheme='blue' variant='outline'>
                   next
                </Button>
            </Center>
        </Container>

    )
}