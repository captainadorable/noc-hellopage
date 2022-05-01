import { About } from "../components/items/About";
import { Card } from "../components/items/card";
import { Hero } from "../components/items/Hero";
import { Layout } from "../components/Layout/Layout";
import { IdContext } from '../contexts/IdContext';
import { useContext } from "react";
export const Mainpage = () => {
    const { Id } = useContext(IdContext);
return(
    <Layout img={Id === 3 ? "#000000" : "#ffffff"} animation={true} nlc={Id === 3 ? "text-[#000000] border-[#000000] hover:text-[#48494e] hover:border-[#48494e]" : "text-[#ffffff] border-[#ffffff] hover:text-[#adadad] hover:border-[#adadad]"}>
        <Hero/>
        <div className='px-10 pb-20 pt-20 flex flex-col space-y-10 rounded-full'>
            <About/>
            <Card/>

        </div>


    </Layout>
);
}