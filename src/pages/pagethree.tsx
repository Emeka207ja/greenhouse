import NotAuthHeader from "@/Components/Layout/NotAuth";
import { PageThree } from "@/Components/PageThree";

export default function pagethree() {
    return (
        <NotAuthHeader>
            <PageThree/>
        </NotAuthHeader>
    )
}