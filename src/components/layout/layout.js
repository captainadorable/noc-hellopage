import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
export const Layout = (props) => {

    return(
        <div className="">
            <Navbar animation={props.animation} nlc={props.nlc} img={props.img}/>
            {props.children} 
            <Footer/>
        </div>
    );

}