import NotAuthHeader from "@/Components/Layout/NotAuth";
import { PageFour } from "@/Components/PageFour";
export default function pagefour() {
    return (
        <NotAuthHeader>
            <PageFour/>
        </NotAuthHeader>
    )
}