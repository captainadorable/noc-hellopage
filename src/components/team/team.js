import { TeamCard } from "./team-card/index"

export const Team = () => {
    const desc = "In this chapter, we'll take a look at how the various CSS layout properties can be used to influence the sizing, positioning and overall layout of a page. I have also included a number of puzzles to help you review the things you have learned in the previous chapters."
    const team = [
        {
            CardName:"Muhammed Gürel",
            CardDepartment:"İnsan Kaynakları",
            CardDescription: "2007 İstanbul doğumlu. İlk ve orta öğrenimini Sakarya’da tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. Sınıf öğrencisi. Şu anda okulunda Robotik Kulübü üst kurul üyeliği yapmaktadır. Yazılımla ilgileniyor.",
            CardImage: "",
            CardMedia:[]
        },
        {
            CardName:"Yusuf Bilal Özcan",
            CardDepartment:"CEO",
            CardDescription: desc,
            CardImage:"",
            CardMedia:[]
        },
        {
            CardName:"Ferhat Şahin",
            CardDepartment:"Halkla İlişkiler",
            CardDescription: "2006 Konya doğumlu. İlk ve orta öğrenimini Konya’da tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. Sınıf öğrencisi. Şu anda okulunda Toplumsal Etkileşim Kulübü Başkanlığı yapmaktadır. 3 yıl lisanslı olarak bisiklet sporu yaptı.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/965993957098160188/unknown.png?width=676&height=676",
            CardMedia:[]
        },
        {
            CardName:"Tahir Yusuf Eser",
            CardDepartment:"Üretim",
            CardDescription: "2006 Kayseri doğumlu. İlk öğrenimini Konya’da orta öğrenimini Kayseri’de tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. Sınıf öğrencisi. Şu anda okulunda Robotik Kulübü üyesi. Yazılımla ve Web Geliştiriciliği ile ilgileniyor.",
            CardImage:"",
            CardMedia:[]
        },
        {
            CardName:"İsmail Efe Gümüş",
            CardDepartment:"Üretim",
            CardDescription: desc,
            CardImage:"",
            CardMedia:[]
        },
        {
            CardName:"Abdulkadir Küçük",
            CardDepartment:"Üretim",
            CardDescription: desc,
            CardImage:"",
            CardMedia:[]
        },
        {
            CardName:"Ayça Soylu",
            CardDepartment:"Pazarlama",
            CardDescription: desc,
            CardImage:"",
            CardMedia:[]
        },
        {
            CardName:"Yiğit Çakmak",
            CardDepartment:"Finans",
            CardDescription: desc,
            CardImage:"",
            CardMedia:[]
        },
        {
            CardName:"Elif Doğrul",
            CardDepartment:"Pazarlama",
            CardDescription: desc,
            CardImage:"",
            CardMedia:[]
        }
    ]
    return (
        <div className="flex flex-col items-center space-y-16 pt-36">
            <div className="text-4xl lg:text-6xl" id="team">Ekip Üyeleri</div>

            <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:gap-8 md:space-y-0 md:gap-8 space-y-10 lg:space-y-0">
                {team.map((eleman, count) => (
                    <div key={count}>
                        <TeamCard Count={count} CardName={eleman.CardName} CardDepartment={eleman.CardDepartment} CardDescription={eleman.CardDescription} CardImage={eleman.CardImage} CardMedia={eleman.CardMedia}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
