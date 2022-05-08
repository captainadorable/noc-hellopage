import { Ekipdata } from "../../libs/Ekipdata"
export const Ekipgrid = () => {
    const Card = (props) => {
        return(
        <a href={props.href}>
            <div className=" rounded-2xl h-full flex flex-col bg-[#4668dc] text-[#f7eee5]  delay-100 duration-100 hover:bg-[#5577f3] transistion ">
                <div className="flex flex-row  w-full p-3 space-x-10 h-3/4">
                    <div className="flex justify-center w-3/6">
                        <img src={props.img} alt="card_image" className=" bg-cover p-2 hover:p-0 transistion hover:rounded-full duration-100 delay-100 opacity-95 hover:opacity-100 rounded-full "/> 
                    </div>  
                    <div className="flex flex-col  spacey-3 justify-center w-3/6">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl">{props.title}</h1>
                            <h2 className="text-gray-300">{props.departmant}</h2>
                        </div>
                        <div className="flex flex-row space-x-2 justify-center">
                            {props.social.map(social => (
                                <a href={social.link}>
                                    <social.image className={`text-xl ${social.color}`}/>
                                </a>
                            
                            ))}
                        </div>
                    </div>
                </div>                
                <div className=" flex flex-row items-center space-x-5 p-2 h-1/4 ">
                    <p className="h-1/2 flex items-center w-10/12">{props.text}</p>
                    <a href={props.href} className="  w-2/12">
                        <img src="/images/arrow.svg" alt="" style={{"transform": "rotate(90deg)"}}/>
                    </a>             
                </div>
            </div>
        </a> 
        )
    }
    return(
        <div className="px-20 pt-32 flex h-full flex-col space-y-10">
            <div className="px-20 pt-10 text-xl text-[#7a94f3] flex flex-row space-x-2">
                <a href="/" className="hover:underline hover:underline-offset-2">Anasayfa</a>
                <span>-</span>
                <h1>Ekip üyeler</h1>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
                {Ekipdata.map(data => (
                     <Card title={data.user} departmant={data.departmant} img={data.userphoto} href={`/Ekip/${data.userlink}`} text={data.userblog.slice(0, 72) + "..."} social={data.usersocialmedias}/>
                ))}
            </div>
        </div>
    )
}