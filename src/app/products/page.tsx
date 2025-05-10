import Link from "next/link"

type tParams = Promise<{ id : string }>
export default async function ProductList( props : {
    params : tParams
}) {
    const { id } = await props.params;
    const nav = parseInt(id)
    return (
        <>
            <h1>My Products</h1>
            <Link href={`products/${nav}`}>go toProduct 1</Link>
            <h2><Link href="">Products</Link></h2>
            <h2>Product 3</h2>

        </>
        
    )
}