import { Kurumsaldata } from "../../libs/kurumsaldata"
export const Kurumsalgrid = () => {
    const texts =["Lorem ipsum dolor","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    const Card = (props) => {
        return(
        <a href={props.href}>
            <div className=" rounded-2xl h-full flex flex-col bg-[#5466a6] space-y-10 text-[#f7eee5] opacity-95 hover:opacity-100">
                <img src={props.img} alt="card_image" className="rounded-t-2xl bg-cover h-2/3"/>
                <div className="flex flex-col space-y-5 p-3 ">
                    <h1 className="text-2xl">{props.title}</h1>
                    <p>{props.text}</p>
                    
                    <a href={props.href} className="justify-end flex ">
                    <img src="/images/arrow.svg" alt="" style={{"transform": "rotate(90deg)"}}/>
                    </a>             
                </div>
            </div>
        </a> 
        )
    }
    return(
        <div className="px-20 pt-32 flex flex-col space-y-10">
            <div className="px-20 pt-10 text-xl text-[#7a94f3] flex flex-row space-x-2">
                <a href="/" className="hover:underline hover:underline-offset-2">Anasayfa</a>
                <span>-</span>
                <h1>Kurumsal</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {Kurumsaldata.map(data => (
                     <Card title={data.title} img={data.img} href={`/Kurumsal/${data.title}`} text={data.text}/>
                ))}
                
                
                
            </div>
        </div>

    )

}