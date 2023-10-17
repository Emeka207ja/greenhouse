import NotAuthHeader from '@/Components/Layout/NotAuth'
import Head from 'next/head'
import { Pagetwo } from '@/Components/Home/Pagetwo'


export default function pagetwo() {
    return (
        <>
            <Head>
                <title>blue sky</title>
                <meta name="description" content="sustanable ecosystem project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/images/icon.jpg" />
            </Head>
            <NotAuthHeader>
                <Pagetwo/>
            </NotAuthHeader>
        </>
    )
}