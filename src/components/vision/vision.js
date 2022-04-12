import { VisionText } from "./vision-text/index"
import { VisionImage } from "./vision-image/index"

export const Vision = () => {
    return (
        <div className="lg:px-48 px-10 pt-20 lg:pt-56 flex flex-col items-center space-y-10">
            <div className="lg:text-6xl text-4xl items-center">Vizyonumuz</div>
            <div className="flex lg:flex-row flex-col items-center space-y-8">
                <div className="lg:w-1/3">
                    <VisionImage />
                </div>
                <div className="lg:w-2/3 ">
                    <VisionText />
                </div>
            </div>
        </div>
    )
}