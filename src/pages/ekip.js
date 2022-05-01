import { Ekipgrid } from "../components/items/Ekipgrid";
import { Layout } from "../components/Layout/Layout";
export const Ekip = () => {
    return(
        <Layout img="#7a94f3" animation={false} nlc="text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6]">
            <Ekipgrid/>
        </Layout>
    )

}