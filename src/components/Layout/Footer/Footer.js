import { Social_Medias } from "../../../libs/social_media";
export const Footer = () => {
    const Footer_links = (props) => {
        return(
            <a href={props.href} className=" text-center hover:underline hover:underline-offset-2">{props.title}</a>
        )

    }
    return(
        <div className="pt-10 inset-x-0">
            <div className=" lg:px-20 px-5 flex justify-center bg-[#344591] py-10">
                <div className=" justify-between flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10">
                    <div className="flex flex-col  space-y-3 items-center">
                        <h1 className="text-white text-center">
                            Copyright 2022 All rights reserved Non-Official Company
                        </h1> 
                        <div className="flex flex-col lg:flex-row lg:space-x-2 text-white">
                            <div className="flex flex-row space-x-2 text-white justify-center">
                                <Footer_links href="/" title="Anasayfa"/>
                                <Footer_links href="/#Biz" title="Biz kimiz?"/>
                                <Footer_links href="/Kurumsal/Sponsor" title="Sponsorluk"/>
                               
                            </div>
                            <div className="flex flex-row space-x-2  text-white justify-center">
                                <Footer_links href="/Kurumsal/Vizyon" title="Vizyon"/>
                                <Footer_links href="/Kurumsal/Misyon" title="Misyon"/>
                                <Footer_links href="/Kurumsal/Hisse" title="Hisse"/>
                                <Footer_links href="" title="Ekip"/>
                                <Footer_links href="" title="Paketler"/>
                            </div>
                            
                        </div>
                        <div className="flex flex-row  space-x-2 text-[#3b82f6] text-lg">
                            <Footer_links href="" title="Şartlar"/>
                            <Footer_links href="" title="Gizlilik"/>   
                            <Footer_links href="" title="Geri bildirim"/>  
                            <Footer_links href="" title="Yardım"/>
                        </div>                    
                    </div>
                    <div className='flex flex-row space-x-4 items-center justify-center'>
                        {Social_Medias.map((social ) => {
                            return(
                            <a href={social.href} target="_blank">
                                <social.image className={`lg:text-3xl text-xl ${social.color}`}/>
                            </a>
                            
                            )
                            
                            })}
                    </div>
                </div>
            </div>
        </div>

    );
}