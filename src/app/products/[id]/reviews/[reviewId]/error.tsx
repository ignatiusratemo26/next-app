"use client"
export default function ErrorBoundary({error} :{
    error : Error
}) {
    return (
        <div>
            <h1>Error in reviewID {error.message}</h1>
        </div>
    )
}