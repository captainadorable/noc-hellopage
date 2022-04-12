import { Footer } from "./footer/index"
import { Navbar } from "./navbar/index"

export const Layout = ({title, children}) => {
    return (
        <div className="space-y-20 flex flex-col selection:bg-[#debd9b] selection:text-[#6e4b27]">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}