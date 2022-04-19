import { TeamCard } from "./team-card/index"

export const Team = () => {
    const desc = "In this chapter, we'll take a look at how the various CSS layout properties can be used to influence the sizing, positioning and overall layout of a page. I have also included a number of puzzles to help you review the things you have learned in the previous chapters."
    const team = [
        {
            CardName:"Muhammed Gürel",
            CardDepartment:"İnsan Kaynakları",
            CardDescription: desc,
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
            CardDescription: desc,
            CardImage:"",
            CardMedia:[]
        },
        {
            CardName:"Tahir Yusuf Eser",
            CardDepartment:"Üretim",
            CardDescription: desc,
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
            CardDepartment:"Üretim (amele)",
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
        <div className="flex flex-col items-center space-y-16 pt-12">
            <div className="text-4xl lg:text-6xl" id="team">Ekip Üyeleri</div>

            <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:gap-8 md:space-y-0 md:gap-8 space-y-10 lg:space-y-0">
                {team.map(eleman => (
                    <TeamCard CardName={eleman.CardName} CardDepartment={eleman.CardDepartment} CardDescription={eleman.CardDescription} CardImage={eleman.CardImage} CardMedia={eleman.CardMedia}/>
                ))}
            </div>
        </div>
    )
}
