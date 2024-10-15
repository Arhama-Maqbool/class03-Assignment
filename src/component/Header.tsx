import Link from "next/link";

export default function Header (){
    return(
        <div className="header">
            <ul className="header-btn">
            <Link href={"/"}><li className="flex text-centere hower:underlin">Home</li></Link>
             <Link href={"/About"}><li className="flex text-center hower:underline">About</li></Link>
             <Link href={"/Contact"}><li className="flex text-center">contact</li></Link>
             <Link href={"/jobs"}><li className="flex text-center">jobs</li></Link>
                

            </ul>
        </div>
    )
}