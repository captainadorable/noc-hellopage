import {
    MdArrowBackIos,
    MdArrowForwardIos

} from 'react-icons/md';
import { Social_Medias } from '../../libs/social_media';
import { useState, useEffect, createContext, useContext } from "react";
import { SliderData } from "../../libs/sliderdata";

import { IdContext } from '../../contexts/IdContext';
export const Hero = () => {
    const { slider, setslider, Id, setId } = useContext(IdContext)

useEffect(() => {
    let slider1 = SliderData.find((slider) => slider.id === parseInt(Id));
    if (slider1) {
      setslider(slider1);
    
    }
  }, [Id]);
   
  const nextslide = () => {
    if(Id !== SliderData.length){
        setId(ex => ex + 1)
    }
    else if(Id === SliderData.length)
    setId(ex => 1)
    }
  
  const Backslide = () => {
    if (Id !== 1){
        setId(ex => ex - 1)
    }
    else if(Id === 1){
        setId(ex => SliderData.length)
    }
  }
  
  
  return(    
        <div className="flex flex-col h-screen w-full lg:space-y-10 space-y-20">
            <div 
            className={`delay-100 duration-100 transistion w-full h-full ${slider?.background} bg-cover ${slider?.id === 2 ? "bg-center" : "" || slider?.id === 3 ? "lg:bg-right bg-center" : "" || slider?.id === 1 ? "lg:bg-left bg-top " : ""} text-white pt-20`} >
                <div className="lg:h-5/6 h-4/6 flex flex-row items-center justify-center lg:px-10 ">
                    <div className="w-1/6 flex justify-center flex">
                        <button onClick={() => Backslide()} className="lg:flex hidden">
                            <MdArrowBackIos size={40} fill="#ffffff" />  
                        </button>
                    </div>
                    <div className={slider?.slidercss}>
                        <div>
                            {slider?.text}
                        </div>
                        <button onClick={() => window.open(`${slider?.href}`, slider?.href === "#BizKimiz" ? "_self" : "_blank")} className={slider?.buttoncss} >
                            {slider?.buttontext}
                        </button>
                    </div>
                
                    <div className="w-1/6  justify-center flex">
                        <button onClick={() => nextslide()}  className="lg:flex hidden">
                            <MdArrowForwardIos size={40} fill="#ffffff" />
                        </button>
                    </div>
                </div>
                <div id="BizKimiz" className={`lg:h-1/6 h-2/6 border-t-4 space-y-10 lg:space-y-0 border-white flex flex-col lg:flex-row items-center px-10 justify-center lg:justify-between`}>
                    <div className='flex flex-row items-center space-x-4'>
                        <div className="w-1/6 flex justify-center flex">
                            <button onClick={() => Backslide()}>
                                <MdArrowBackIos size={40} fill="#ffffff" />  
                            </button>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <button className={`rounded-full delay-100 duration-100 transistion ${Id == 1 ? "lg:p-3 p-4" : "lg:p-2 p-3"} bg-white `} onClick={() => setId(1)}>

                            </button>
                            <button className={`rounded-full delay-100 duration-100 transistion ${Id == 2 ? "lg:p-3 p-4" : "lg:p-2 p-3"} bg-white `} onClick={() => setId(2)}>

                            </button>
                            <button className={`rounded-full delay-100 duration-100 transistion ${Id == 3 ? "lg:p-3 p-4" : "lg:p-2 p-3"} bg-white `} onClick={() => setId(3)}>

                            </button>
                        </div>    
                        <div className="w-1/6  justify-center flex">
                            <button onClick={() => nextslide()}>
                                <MdArrowForwardIos size={40} fill="#ffffff" />
                            </button>
                        </div>
                    </div>      
                    
                    <div className='flex flex-row space-x-4'>
                        {Social_Medias.map((social ) => {
                            return(
                            <a href={social.href} target="_blank">
                                <social.image className={`text-3xl ${social.color}`}/>
                            </a>
                            
                            )
                            
                            })}
                    </div>
                </div>
            </div>  
            <div className=' w-full bg-black'>

            </div>
        </div>
);
}