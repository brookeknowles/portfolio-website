import React from "react";

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4x md:text-7xl mb-1 md:mb-3 font-bold">Brooke Knowles</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Computer Engineering Student & Software Developer</p>
            <p 
                className="text-small max-w-xl mb-6 font-bold"
            >
                I am a final year student at the University of Auckland, finishing off my Bachelor of Engineering (Honours) 
                degree, specialised in Computer Systems Engineering. <br /> <br />
                On this website you can check out some of my projects done both for university and for my own personal enjoyment,
                as well as my professional work history. If you make it to the end of the page, feel free to reach out!
            </p>
        </div>
    )
}

export default Intro;