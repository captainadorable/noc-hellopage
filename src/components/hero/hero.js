import { HeroText } from "./hero-text/index"
import { HeroImage } from "./hero-image/index"
import { HeroBlobs } from "./hero-blobs"
import { useEffect } from "react"

export const Hero = () => {
    return (
        <div className="lg:px-72 px-10 lg:pt-40 flex justify-center items-center flex-col lg:flex-row space-y-10" id="home">
            <HeroBlobs />
            <div className="lg:w-2/3">
                <HeroText />
            </div>
            <div className="lg:w-1/3">
                <HeroImage />
            </div>
        </div>
    )
}