import NotAuthHeader from "@/Components/Layout/NotAuth";
import { PageSix } from "@/Components/PageSix";

export default function pagesix() {
    return (
        <NotAuthHeader>
            <PageSix/>
        </NotAuthHeader>
    )
}