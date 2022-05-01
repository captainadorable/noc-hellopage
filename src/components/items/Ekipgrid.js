import { Ekipdata } from "../../libs/Ekipdata"
export const Ekipgrid = () => {
    const Card = (props) => {
        return(
        <a href={props.href}>
            <div className=" rounded-2xl h-full flex flex-col bg-[#5466a6] text-[#f7eee5] opacity-95 hover:opacity-100">
                <img src={props.img} alt="card_image" className=" bg-cover p-10 rounded-full"/>
                <div className="flex flex-col space-y-5 p-3 h-3/6">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-2xl">{props.title}</h1>
                        <h2 className="text-gray-300">{props.departmant}</h2>
                    </div>
                    <p className="h-1/2">{props.text}</p>
                    <div className="flex flex-row space-x-2">
                        {props.social.map(social => {
                            <a href={social.link}>
                                <social.image fill={social.color}/>

                            </a>
                        })}
                    </div>
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
                <h1>Ekip üyeler</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {Ekipdata.map(data => (
                     <Card title={data.user} departmant={data.departmant} img={data.userphoto} href={`/Ekip/${data.userlink}`} text={data.userblog.slice(0, 72) + "..."} social={data.usersocialmedias}/>
                ))}
            </div>
        </div>
    )
}