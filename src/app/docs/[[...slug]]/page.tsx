
export default async function Docs(
    props : {
    params: Promise<{ slug : string[] }> 
}) {
    const { slug } = await props.params;
    if (slug?.length === 2 ) {
        return (<h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>);

    }
    else if ( slug?.length === 1) {
        return <h1> Viewing docs for feature { slug[0]}</h1>
    }
    return <h1>Docs homepage</h1>;
}