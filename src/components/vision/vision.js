import { VisionText } from "./vision-text/index"
import { VisionImage } from "./vision-image/index"

export const Vision = () => {
    return (
        <div className="xl:px-48 px-10 py-24 xl:pt-56 lg:pt-36 flex flex-col items-center space-y-10">
            <div className="lg:text-6xl text-4xl items-center">Vizyonumuz</div>
            <div className="flex lg:flex-row lg:space-y-0 lg:space-x-8 flex-col items-center space-y-12">
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