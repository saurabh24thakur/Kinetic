import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/footer";
const LandingPage=()=>{
    return(
        <>
        <div className="Page1 w-screen  bg-black flex flex-col  items-center ">
        <Navbar/>

        <div className="content pt-4 space-x-0">

            <h1 className="slogan1 text-white font-bold text-[150px]">Create</h1>
            <h1 className="slogan1 text-gray-700 font-bold text-[150px] "> <strike>prototype</strike></h1>
            <h1 className="slogan1 text-gray-700 font-bold text-[150px] "> <strike>that look</strike></h1>
            <h1 className="slogan1 text-gray-700 font-bold text-[150px] "> <strike>and feel</strike></h1>
            <h1 className="slogan1 text-white font-bold text-[150px] ">like real</h1>
            <h1 className="slogan1 text-white font-bold text-[150px] ">app.</h1>
        </div>

        <div className="w-[75%] gap-">
            <h2 className="text-white text-4xl font-bold mt-4">
                This is an AI powered Full Stack Application <span className="text-red-900">to turn your Ideas into working prototype..</span>
            </h2>

            <h2 className="text-white text-4xl font-bold">
                "Make Your prompt Alive<span className="text-red-900"> ..Vybe like a pro</span>"
            </h2>
        </div>
        <Footer/>

        </div>
        
        </>
    );
}

export default LandingPage;