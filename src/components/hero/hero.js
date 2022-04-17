import { HeroText } from "./hero-text/index"
import { HeroImage } from "./hero-image/index"
import { HeroBlobs } from "./hero-blobs"
import { useEffect } from "react"

export const Hero = () => {
    return (
        <div className="flex 2xl:px-64 2xl:pt-36 xl:pt-28 lg:pt-24 lg:px-12 lg:flex-row lg:space-x-0 md:px-24 md:text-center md:space-y-12 px-12 justify-center items-center flex-col space-y-10" id="home">
            <HeroBlobs />
            <div className="2xl:w-2/3  lg:w-1/2">
                <HeroText />
            </div>
            <div className="2xl:w-1/3 ">
                <HeroImage />
            </div>
        </div>
    )
}