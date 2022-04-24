import { TeamCard } from "./team-card/index"

export const Team = () => {
    const desc = "In this chapter, we'll take a look at how the various CSS layout properties can be used to influence the sizing, positioning and overall layout of a page. I have also included a number of puzzles to help you review the things you have learned in the previous chapters."
    const team = [
        {
            CardName:"Muhammed Gürel",
            CardDepartment:"İnsan Kaynakları",
            CardDescription: "2007 İstanbul doğumlu. İlk ve orta öğrenimini Sakarya’da tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. Sınıf öğrencisi. Şu anda okulunda Robotik Kulübü üst kurul üyeliği yapmaktadır. Yazılımla ilgileniyor.",
            CardImage: "https://media.discordapp.net/attachments/965993851867263017/967568882233659442/ubuce.jpg?width=360&height=360",
            CardMedia:[]
        },
        {
            CardName:"Yusuf Bilal Özcan",
            CardDepartment:"CEO",
            CardDescription: "2006 yılında İstanbul'da doğdu. İlk ve orta öğrenimini Sakarya'da tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. sınıf öğrencisi. Şu anda okulunda spor kulübü temsilcisi. Ağırlık sporları ile ilgileniyor.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967568882757943296/ceo.jpg?width=360&height=360",
            CardMedia:[]
        },
        {
            CardName:"Ferhat Şahin",
            CardDepartment:"Halkla İlişkiler",
            CardDescription: "2006 Konya doğumlu. İlk ve orta öğrenimini Konya’da tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. Sınıf öğrencisi. Şu anda okulunda Toplumsal Etkileşim Kulübü Başkanlığı yapmaktadır. 3 yıl lisanslı olarak bisiklet sporu yaptı.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967568882481131630/ferhorse.jpg?width=405&height=405",
            CardMedia:[]
        },
        {
            CardName:"Tahir Yusuf Eser",
            CardDepartment:"Üretim",
            CardDescription: "2006 Kayseri doğumlu. İlk öğrenimini Konya’da orta öğrenimini Kayseri’de tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. Sınıf öğrencisi. Şu anda okulunda Robotik Kulübü üyesi. Yazılımla ve Web Geliştiriciliği ile ilgileniyor.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967570252475019274/unknown.png?width=576&height=576",
            CardMedia:[]
        },
        {
            CardName:"İsmail Efe Gümüş",
            CardDepartment:"Üretim",
            CardDescription: "2006 yılında Sakarya'da doğdu. İlk ve orta öğretimini Geyve ilçesinde tamamladı, Şuan da Sakarya Cevat Ayhan Fen Lisesinde 10. sınıf öğrencisi. Yazılım ile ilgileniyor ve ağırlıklı olarak App ve Web development ile ilgileniyor.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967571631616708688/unknown.png?width=497&height=488",
            CardMedia:[]
        },
        {
            CardName:"Abdulkadir Küçük",
            CardDepartment:"Üretim",
            CardDescription: "2006 yılında Sakarya da doğdu.ilk orta öğretimini akyazı imamhatip ortaokulunda okudu şuanda Sakarya cevat ayhan fen lisesinde okuyor ve 10.sınıfa gidiyor yazılım ile ilgileniyor ve şirketimizde üretim görevlisi olarak çalışıyor.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967570466585862144/unknown.png?width=576&height=576",
            CardMedia:[]
        },
        {
            CardName:"Ayça Soylu",
            CardDepartment:"Pazarlama",
            CardDescription: "2006 Trabzon doğumlu. İlk ve orta öğretimini Sakarya'da tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10. sınıf öğrencisi. 5 yıl lisanslı oryantiring yaptı. Müzik ve biyoloji ile ilgileniyor.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967569856146845696/unknown.png?width=419&height=419",
            CardMedia:[]
        },
        {
            CardName:"Yiğit Çakmak",
            CardDepartment:"Finans",
            CardDescription: "2006 Sakarya doğumlu. İlk ve orta öğretimini Sakarya'da tamamladı. Hali hazırda Sakarya Cevat Ayhan Fen Lisesinde 10.sınıf öğrencisi. Finans ve ekonomi ile ilgileniyor.",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967574147708354580/unknown.png?width=497&height=488",
            CardMedia:[]
        },
        {
            CardName:"Elif Doğrul",
            CardDepartment:"Pazarlama",
            CardDescription: "2006 Düzce doğumlu. İlk ve orta öğrenimini Sakarya’da tamamladı. Şu an Sakarya Cevat Ayhan Fen Lisesinde 10. Sınıf öğrencisi. 7 yıl karete yaptı.Biyoloji ile ilgileniyor. ",
            CardImage:"https://media.discordapp.net/attachments/965993851867263017/967572160317100103/unknown.png?width=497&height=488",
            CardMedia:[]
        }
    ]
    return (
        <div className="flex flex-col items-center space-y-16 pt-36 xl:pt-56 lg:pt-80 ">
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
