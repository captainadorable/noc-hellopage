import { MissionText } from "./mission-text/index"
import { MissionImage } from "./mission-image/index"

export const Mission = () => {
    return (
        <div className="xl:px-72 px-10 lg:pt-56 pt-8 flex flex-col items-center space-y-12">
            <div className="lg:text-6xl text-4xl items-center">Misyonumuz</div>
            <div className="flex lg:flex-row lg:space-y-0 flex-col items-center space-y-12">
                <div className="lg:w-2/3 lg:px-16 ">
                    <MissionText />
                </div>
                <div className="lg:w-1/3">
                    <MissionImage />
                </div>
            </div>
        </div>
    )
}