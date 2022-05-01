import { Kurumsalgrid } from "../components/items/kurumsalgrid";
import { Layout } from "../components/Layout/Layout";
export const Kurumsal = () => {
return(
    <Layout img="#7a94f3" animation={false} nlc="text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6]">
        <Kurumsalgrid/>
    </Layout>
);
}