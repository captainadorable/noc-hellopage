export const Card = () => {
const Card_GO = (data) => {
    return(
    <div className="flex flex-col py-4 px-3 space-y-6 bg-white shadow-xl rounded-3xl items-center">
        <img src={data.img} alt="" className="  w-44"/>
        <div className="space-y-3 flex flex-col items-center">
            <h1 className="font-semibold text-center text-lg">
                {data.title}
            </h1>
            <p className="text-center px-10">
                {data.text}
            </p>
            <button onClick={()=> window.open(`${data.href}`,"_blank")} className="w-44 text-[#7a94f3] border-[#7a94f3] hover:border-[#7a94f3] hover:text-white hover:bg-[#7a94f3] px-5 py-3 border-2 rounded-full  font-light">
                Daha fazla
            </button>   
        </div>
    </div>
    )
}
const text = ["pomodoro odaları","Pomodoro odalarımızda ders çalışabilir. Başka öğrenci arkadaşlarınız ile bilgi alışverişi yaparak dersleri daha kolay öğrenirsiniz"]
return(
    <div className="pt-0 grid grid-cols-3 gap-4 place-items-center">
        <Card_GO img="" title={text[0]} text={text[1]} href="/pomodoro"/>
        <Card_GO img="" title={text[0]} text={text[1]} href="/pomodoro"/>
        <Card_GO img="" title={text[0]} text={text[1]} href="/pomodoro"/>
    </div>

); 
}