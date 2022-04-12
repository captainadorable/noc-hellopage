import { TeamCard } from "./team-card/index"

export const Team = () => {
    const desc = "In this chapter, we'll take a look at how the various CSS layout properties can be used to influence the sizing, positioning and overall layout of a page. I have also included a number of puzzles to help you review the things you have learned in the previous chapters."
    return (
        <div className="flex flex-col items-center space-y-16 pt-12">
            <div className="text-4xl lg:text-6xl" id="team">Ekip Üyeleri</div>

            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:gap-8 space-y-10 lg:space-y-0">
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
                <TeamCard CardName="Muhammed Gürel" CardDepartment="Human Resources" CardDescription={desc} CardImage={""} CardMedia={["", "", ""]}/>
            </div>
        </div>
    )
}
