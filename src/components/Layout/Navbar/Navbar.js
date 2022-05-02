import { Logosvg } from "../../../mysvgs/logo";
import { useState } from "react";
export const Navbar = (data) => {
    const nlc = data.nlc
    const img = data.img
    window.onscroll = function(){scrolledscreen()}
    const [value, setvalue] = useState(true)
    function scrolledscreen() {  
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            setvalue(false)
        }
        else{
            setvalue(true)
        }
    }
    
    const Navbar_links = (data) => {

        return(
            <button 
            onClick={() => window.open(data.href, "_self")} className={`h-16 text-center px-5 py-3 border-b-4 rounded-full text-2xl font-light ${value ? ` ${nlc}` : `text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6] hover:border-b-8 `}`}>
                {data.name}
            </button>
        )
    }
    return(
        <div className={` z-50 ${data.animation ? "" : " "} fixed inset-x-0  flex flex-row justify-between px-16 shadow-xl ${value ? "py-4" : "py-2 bg-[#f7eee5]" }`}>
            <a href="/" className="pt-1 lg:w-[150px] lg:h-[53px] w-[200px] h-[70px]"><Logosvg fill={value ? `${img}` : `#7a94f3`}/></a>
            <div className={`flex flex-row space-x-4 items-center text-xl `}>
               <Navbar_links href="/#BizKimiz" name="Biz kimiz?"/>
               <Navbar_links href="/Paketler" name="Paketler"/>
               <Navbar_links href="/Ekip" name="Ekip üyeleri"/>
               <Navbar_links href="/Kurumsal" name="Kurumsal"/> 
            </div>
            <button 
            onClick={() => window.open("https://portal.nonofficialcompany.com", "_self")} className={`h-16 text-center px-5 py-3 border-b-4 rounded-full text-2xl font-light ${value ? ` ${nlc}` : `text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6] hover:border-b-8 `}`}>
                Portala gir
            </button>
        </div>
        
    );
}