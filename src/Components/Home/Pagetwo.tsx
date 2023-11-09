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
import { useSearchParams } from 'next/navigation'
import { GrFormNext } from "react-icons/gr"
import { useState, useEffect, ChangeEvent,useRef } from "react"
import { sunderland, south_tyneside, north_tyneside, gateshead, newcastle, ilocation } from "./location"
import { AiOutlineCaretDown } from "react-icons/ai";
import { useRouter } from "next/router"
import { tree } from "next/dist/build/templates/app-page"
export const Pagetwo: React.FC = () => {
    const [pagetwoQtn, setPagetwoQtn] = useState<{ sch: string, area: string, town: string }>({ sch: "", area: "", town: "" })
    const [area, setArea] = useState<ilocation[] | []>([])
    const [empty,setEmpty] = useState(true)
    const [videoLoaded, setLoaded] = useState(false)
    const router = useRouter()
      {/* <source src="https://drive.google.com/uc?export=download&id=1xUjf4b4nwdRLT-HaLyc2Jf2ranLAgegC" type="video/mp4" /> */}
    const searchParams = useSearchParams()

    const playRef = useRef<HTMLVideoElement | null>(null)

    const search = searchParams.get('time')
    console.log(search)
    const setControls = () => {
        setLoaded(true);
        if (playRef.current) {
            playRef.current.play()
        }
    }

    const handleChange = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLFormElement
        setPagetwoQtn(
            prev => ({ ...prev, [target.name]: target.value }))
    }
    useEffect(() => {
       switch (pagetwoQtn.town) {
        case "gateshead":
            setArea(gateshead)
            break;
        case "newcastle":
            setArea(newcastle)
            break;
        case "north_Tyneside":
            setArea(north_tyneside)
            break;
        case "south_Tyneside":
            setArea(south_tyneside)
            break;
           case "sunderland":
            setArea(sunderland)
            break;
        default:
            setArea([])
        break;
       }
    }, [pagetwoQtn.town])
    
    useEffect(() => {
        if (search !== null) {
            sessionStorage.setItem("page", `/pagetwo/?time=${search}`);
        }
        
    }, [search])

    useEffect(() => {
        const isEmpty = pagetwoQtn.area.length <= 0 || pagetwoQtn.sch.length <= 0 || pagetwoQtn.town.length <= 0
        setEmpty(isEmpty)
    },[pagetwoQtn.area,pagetwoQtn.sch,pagetwoQtn.town])

    return (
        <Container>
            <Center>
                <Image
                    src="/assets/images/icon2.png"
                    alt="icoin"
                   objectFit="contain"
                    borderRadius='full'
                    boxSize='150px'
                />
            </Center>
           
           
            <Center mt={"1rem"} >
                <video
                    width="640"
                    height="360"
                    playsInline
                    autoPlay
                    muted
                    loop
                    controls={false}
                    style={{ borderRadius: "1rem" }}
                    onLoadedData={setControls}
                    ref={playRef}
                >
                  
                    <source src="/assets/video/page2Vid.mp4" type="video/mp4" />
                    
                </video>
            </Center>
            

            <Card mt={"1rem"}  bg={"#306e8a"} color={"white"}>
                <CardBody>
                    <Center>
                        <Box>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"}>Now we are going to ask you </Text>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"}>3 simple questions</Text>
                       </Box>
                    </Center>
                </CardBody>
            </Card>
         
                <Card  bg={"#306e8a"} color={"white"} mt={"1rem"}>
                    <CardBody>
                        <Box>
                            <Text fontSize={"1.1rem"} textAlign={"center"} fontFamily={"Bree Serif"}>Do not worry, we are not storing any </Text>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"}> personal data - this just allows us</Text>
                            <Text fontSize={"1.1rem"} textAlign={"center"} fontFamily={"Bree Serif"}>to calculate how much you and your </Text>
                            <Text fontSize={"1.1rem"} textAlign={"center"} fontFamily={"Bree Serif"}>friends can help with climate change</Text>
                        </Box>
                    </CardBody>
                </Card>
            
            <Box mt={"1rem"}>
                <form>
                    <Card bg={"#FF8400"}>
                        <CardBody>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"}  color={"white"}>Which of these describes you?</Text>
                        </CardBody>
                    </Card>
                    <FormControl mb={"1rem"} mt={"1rem"}>  
                        <Select
                            name="sch"
                            value={pagetwoQtn.sch}
                            onChange={handleChange}
                            fontSize={"1.2rem"}
                            style={{ borderColor: "#306e8a", backgroundColor: "", textAlign: "center" }}
                            iconSize="6rem"
                            iconColor="#306e8a"
                            icon={<AiOutlineCaretDown/>}
                        >
                            <option value={""}>please choose</option>
                            <option value={"secondary"}>Secondary School (11 - 16yrs)</option>
                            <option value={"A-level or college"}>A-level or College (16-18yrs)</option>
                            <option value={"university"}>University Student  (18-22yrs)</option>
                        </Select>
                    </FormControl>

                    <Card mt={"0.5rem"} bg={"#FF8400"}>
                        <CardBody>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"} color={"white"}>which is your town/city?</Text>
                        </CardBody>
                    </Card>
                    <FormControl mb={"1rem"} mt={"1rem"}>
                               
                        <Select
                            name="town"
                            value={pagetwoQtn.town}
                            onChange={handleChange}
                            fontSize={"1.2rem"}
                            style={{ borderColor: "#306e8a", backgroundColor: "", textAlign: "center" }}
                            iconSize="6rem"
                            iconColor="#306e8a"
                            icon={<AiOutlineCaretDown/>}
                        >
                            <option value={""}>please choose</option>
                            <option value={"gateshead"}>Gateshead</option>
                            <option value={"newcastle"}>Newcastle</option>
                            <option value={"north_Tyneside"}>North Tyneside</option>
                            <option value={"south_Tyneside"}>South Tyneside</option>
                            <option value={"sunderland"}>Sunderland</option>
                        </Select>
                    </FormControl>

                    <Card mt={"0.5rem"}  bg={"#FF8400"}>
                        <CardBody>
                            <Text fontSize={"1.2rem"} textAlign={"center"} fontFamily={"Bree Serif"}  color={"white"}>which is your area</Text>
                        </CardBody>
                    </Card>
                    <FormControl mb={"0.7rem"} mt={"1rem"}>     
                        <Select
                            name="area"
                            value={pagetwoQtn.area}
                            onChange={handleChange}
                            fontSize={"1.2rem"}
                            style={{ borderColor: "#306e8a", backgroundColor: "", textAlign: "center" }}
                            iconSize="6rem"
                            iconColor="#306e8a"
                            icon={<AiOutlineCaretDown/>}
                        >
                            <option value={""}>please choose</option>
                            {
                                area.length > 0 && area.map(item => <option key={item.id} value={item.name}>{item.name }</option>)
                            }
                        </Select>
                    </FormControl>
                </form>
            </Box>
            <Center mt={"0.8rem"} mb={"1.7rem"}>
                <Button
                    rightIcon={<GrFormNext />} 
                    bg={"#306e8a"}
                    as={"a"}
                    // href={!empty ? `/pagethree?sch=${pagetwoQtn.sch}&town=${pagetwoQtn.town}&area=${pagetwoQtn.area}&time=${search}` : "#"}
                    href={"#"}
                    color={"white"}
                >
                   next
                </Button>

           </Center>
        </Container>
    )
}