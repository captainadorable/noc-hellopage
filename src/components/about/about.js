import { AboutText } from './about-text'
import { AboutImage } from "./about-image"

export const About = () => {
    return (
        <div className="lg:px-64 px-10 pt-32 pb-24 flex flex-col items-center space-y-12">
            <div className="lg:text-6xl text-4xl">Biz Kimiz?</div>
            <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-x-8">
                <div className="lg:w-2/4">
                    <AboutImage />
                </div>
                <div className="lg:w-2/4 ">
                    <AboutText />
                </div>
            </div>
        </div>
    )
}