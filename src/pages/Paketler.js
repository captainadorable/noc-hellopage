import { Layout } from "../components/Layout/Layout";

export const  Paketler = () => {
    return(
    <Layout img="#7a94f3" animation={false} nlc="text-[#7a94f3] border-[#7a94f3] hover:text-[#5365a6] hover:border-[#5365a6]">
        <div className="pt-44 flex flex-col space-y-20">
            <h1 className="text-center">Paketler</h1>
            <div className="grid grid-cols-3 gap-4">
                
            </div>
        </div>
    </Layout>
    );
}