type tParams = Promise<{id : string}>

export default async function Reviewslist({ params }:{params: tParams} ) {
    const { id } = await params;
    return (
        <>
            <h1>Product { id } Reviews</h1>
            <h2>Review 1</h2>
            <h2>Review 2</h2>
            <h2>Review 3</h2>
        </>
        
    )
}