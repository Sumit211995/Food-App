import User from "./User";


export default function About(){
    return <>
    <div className="mx-32 mt-8">
    <h1>About Me</h1>
    <User name={"Sumit Kaktwan"} address={"Rishikesh, Dehradun"} />
    </div>
    </>
}