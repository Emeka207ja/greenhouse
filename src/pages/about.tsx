import NotAuthHeader from "@/Components/Layout/NotAuth";
import Head from 'next/head'
import { About } from "@/Components/Home/About";
export default function about() {
    return (
         <>
      <Head>
        <title>about blue sky</title>
        <meta name="description" content="sustanable ecosystem project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/icon.jpg" />
      </Head>
      
     
      <NotAuthHeader>
        <About/>
      </NotAuthHeader>
          
    </>
    )
}