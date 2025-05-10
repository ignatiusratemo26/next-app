import { notFound } from "next/navigation";

type tParams = Promise<{ 
    id : string,
    reviewId: string
}>

function getRandomInt(count : number) {
    return Math.floor(Math.random() * count)
}
export default async function ReviewDetail({ params }: {
    params : tParams
}) {
    const {id, reviewId} = await params;
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review")
    }
    if ( parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <>
            <h1>Review {reviewId} for {id} </h1>

        </>
        
    )
}