import type { Metadata } from "next";
// static metadata
export const metadata : Metadata = {
    title: "Products",
    description: "Products by IggyMall"
}



export default function ProductDetailsLayout({
    children,
}: {
    children : React.ReactNode,
}) {
    return (
        <>
        {children}
        <h2>Featured Products</h2>
        {/* Carousel will be present here */}
        </>

    );
}