import { useState } from "react"

export const About = () => {
const text = ["Bizler öğrencilerimizin bugünlerden çok daha eşit, yenilikçi ve nitelikli eğitim almasını, bu sayede kendi potansiyellerini ortaya çıkarmalarını sağlamayı amaçlayan, öğretmenlerimiz için ise çok daha rahat, esnek ve verimli çalışma koşulları sağlayarak bilgilerini değerli öğrencilerimize en ileri düzeyde aktarmalarını sağlamayı amaçlayan 9 lise öğrencisinden oluşan bir ekibiz. Tek gayemiz eğitiminiz..."]
const [Value , setValue] = useState(true)
return(
<div className="pt-10">
    <div className="w-full h-40 flex flex-row space-x-5 px-5 lg:text-left text-center">
        <div className="text-xl  flex flex-col space-y-4">
            <div className="flex flex-row space-x-2 justify-center lg:justify-start" onMouseMove={() => setValue(false)} onMouseOut={() => setValue(false)}>
                <img src="/images/attachment.svg" alt="" className={`  hidden lg:flex delay-100 duration-300 transistion ${Value ? "invisible w-10" : "hover:visivle w-16"}`}/>
                <h1 className="flex items-center text-3xl font-semibold text-center">Biz kimiz</h1>
            </div>
            <div className="lg:px-12 px-4">
                {text[0]}   
            </div>
        </div>
    </div>
</div>
)
}