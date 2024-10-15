import Image from "next/image"
import profile from "../../public/profile.jpeg"

export default function Main(){
    return(
        <>
        
        <div className="container">
            <div className="childcontainer">
                <p text-center> I am  student of web development course.
                    <br /> I can create an HTML CSS and JAVASCRIPT files.</p>
            </div>
            
            
            <div className="img">
                <Image src={profile} width={250} height={250} alt="profile pic"></Image>
            </div>
         </div>
        
            </>
        
    )
}