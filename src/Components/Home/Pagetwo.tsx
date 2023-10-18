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
    FormLabel,
    Button
} from "@chakra-ui/react"
import { GrFormNext } from "react-icons/gr"
import {useState,useEffect,ChangeEvent} from "react"
export const Pagetwo: React.FC = () => {
    const [pagetwoQtn, setPagetwoQtn] = useState<{ sch: string, area: string, town: string }>({ sch: "", area: "", town: "" })

    const handleChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLFormElement
        setPagetwoQtn(
            prev => ({ ...prev, [target.name]: target.value }))
    }
//     useEffect(() => {
//         console.log(pagetwoQtn)
    //    },[pagetwoQtn])

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
                <video width="640" height="360" controls playsInline autoPlay muted loop style={{borderRadius:"1rem"}}>
                    <source src="/assets/video/vid2.mp4" type="video/mp4" />
                </video>
            </Center>

            <Card mt={"1rem"}>
                <CardBody>
                    <Text fontSize={"0.8rem"}>Now we are going to ask you 3 simple questions</Text>
                </CardBody>
            </Card>
         
            <Center mt={"0.5rem"}>
                <Card>
                    <CardBody>
                        <Text fontSize={"0.8rem"}>Do not worry, we are not storing any personal data - this just allows us to calculate how much you and your friends can help with climate change</Text>
                    </CardBody>
                </Card>
            </Center>

            <Card  mt={"0.5rem"}>
                <CardBody>
                    <form>
                        <FormControl mb={"1rem"}>
                            <FormLabel fontSize={"0.8rem"}>Which of these describes you?</FormLabel>
                            <Select fontSize={"0.8rem"} name="sch" value={pagetwoQtn.sch} onChange={handleChange}>
                                <option value={""}>please choose</option>
                                <option value={"secondary"}>Secondary School (11 - 16yrs)</option>
                                <option value={"a-level"}>A-level or College (16-18yrs)</option>
                                <option value={"uni"}>University Student  (18-22yrs)</option>
                            </Select>
                        </FormControl>

                        <FormControl mb={"1rem"}>
                            <FormLabel fontSize={"0.8rem"}>which is your town/city?</FormLabel>
                            <Select fontSize={"0.8rem"} name="town" value={pagetwoQtn.town} onChange={handleChange}>
                                <option value={""}>please choose</option>
                                <option value={"gateshead"}>Gateshead</option>
                                <option value={"newcastle"}>Newcastle</option>
                                <option value={"north_Tyneside"}>North Tyneside</option>
                                <option value={"south_Tyneside"}>South Tyneside</option>
                                <option value={"sunderland"}>Sunderland</option>
                            </Select>
                        </FormControl>

                        <FormControl mb={"1rem"}>
                            <FormLabel fontSize={"0.8rem"}>which is your area</FormLabel>
                            <Select fontSize={"0.8rem"} name="area" value={pagetwoQtn.area} onChange={handleChange}>
                                <option value={""}>please choose</option>
                                <option value={"chopwell_rowlands"}>Chopwell and Rowlands Gill</option>
                                <option value={"birtley"}>Birtley</option>
                                <option value={"blaydon"}>Blaydon</option>
                                <option value={"bridges"}>Bridges</option>
                                <option value={"sunderland"}>Chowdene</option>
                            </Select>
                        </FormControl>
                    </form>
                </CardBody>
            </Card>
            <Center mt={"0.8rem"}>
                <Button
                    rightIcon={<GrFormNext />} 
                    colorScheme='blue' variant='outline'
                    as={"a"} href="#"
                >
                   next
                </Button>
           </Center>
        </Container>
    )
}