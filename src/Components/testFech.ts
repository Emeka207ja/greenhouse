import axios from "axios"

export const fetchData = async () => {
   try {
     const { data } = await axios.get("http://localhost:5000/")
    console.log("test",data)
   } catch (error:any) {
    console.log(error)
   }
}