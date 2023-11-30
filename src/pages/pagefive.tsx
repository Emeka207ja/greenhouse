import NotAuthHeader from "@/Components/Layout/NotAuth";
import { PageFive } from "@/Components/PageFive";

export default function pagefive() {
    return (
        <NotAuthHeader>
            <PageFive/>
        </NotAuthHeader>
    )
}