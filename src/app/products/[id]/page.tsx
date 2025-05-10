import type { Metadata } from "next";

type tParams = Promise<{ id : string }>
type Props = {
    params : {
        id: string;
    }
};
export const generateMetadata = async ({params}: {params:tParams}): Promise<Metadata> => {
    const { id } = await params;
    return {
        title:`Product ${id}`
    }
}

export default async function ProductDetails( { params } : {params : tParams} ) {
    const { id }  = await params;
    return (
        <>
            <h1>Details of the Product { id}</h1>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </>
        
    )
}