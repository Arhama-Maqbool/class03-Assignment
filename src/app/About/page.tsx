import Footer from "@/component/footer";
import Header from "@/component/Header";


export default function About(){

    return(
        <div className="center">
         
          <Header/>
            <h1   className="bg color=7E60BF text-center text-5xl mt-10 underline">About</h1>

            <p className="bg colour-white text-center text-2xl mt-20">Hey i am <span>Arhama Mabool</span> I am student of IT course in <span>Governer House . </span>My  qualification is Intermediate from commerce. Its some little bit introduction about me.Thanks for wacthing me....</p>
          <Footer/>   
        </div>
    )
}