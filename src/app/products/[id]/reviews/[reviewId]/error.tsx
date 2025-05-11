"use client"
import { useRouter } from "next/navigation";

export default function ErrorBoundary({error, reset} :{
    error : Error;
    reset : () => void;
}) {
    const router = useRouter();
    const handleReset = () => {
        reset()
        router.refresh()
    }
    return (
        <div>
            <h1>Error in reviewID {error.message}</h1>
            <button onClick={handleReset}>Try again</button>
        </div>
    )
}