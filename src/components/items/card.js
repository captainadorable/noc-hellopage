import { useState } from "react"

export const Card = () => {
const [Value , setValue] = useState(true)
const Card_GO = (data) => {
    return(
    <div className="h-60  flex flex-col py-4 px-3 space-y-6 bg-white shadow-xl rounded-3xl items-center">
        <img src={data.img} alt="" className="  w-44"/>
        <div className="space-y-3 flex flex-col items-center">
            <h1 className="font-semibold text-center text-lg">
                {data.title}
            </h1>
            <p className="text-center px-10">
                {data.text}
            </p>
            <button onClick={()=> window.open(`${data.href}`,"_blank")} className="hover:text-lg hover:border-r-[5px] hover:border-l-[5px] hover:w-40 w-48 delay-75 duration-100 transistion text-[#7a94f3] border-[#7a94f3]  border-r-4 border-l-4  px-5 py-3  rounded-xl  font-light">
                Daha fazla
            </button>   
        </div>
    </div>
    )
}
const text = ["pomodoro odaları","Pomodoro odalarımızda ders çalışabilir. Başka öğrenci arkadaşlarınız ile bilgi alışverişi yaparak dersleri daha kolay öğrenirsiniz"]
return(
    <div className="flex flex-col space-y-8 pt-10">
        <div className={`text-center text-4xl font-semibold delay-100 duration-300 transistion ${Value ? " h-10" : " h-16 text-5xl"}`} onMouseMove={() => setValue(false)} onMouseOut={() => setValue(false)}>
            Hizmetler
        </div>
        <div className="pt-0 grid grid-cols-3 gap-4 place-items-center px-10">
            <Card_GO img="" title={text[0]} text={text[1]} href="/pomodoro"/>
            <Card_GO img="" title={text[0]} text={text[1]} href="/pomodoro"/>
            <Card_GO img="" title={text[0]} text={text[1]} href="/pomodoro"/>
        </div>
    </div>



); 
}