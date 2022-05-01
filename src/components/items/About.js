
export const About = () => {
const text = ["Bizler öğrencilerimizin bugünlerden çok daha eşit, yenilikçi ve nitelikli eğitim almasını, bu sayede kendi potansiyellerini ortaya çıkarmalarını sağlamayı amaçlayan, öğretmenlerimiz için ise çok daha rahat, esnek ve verimli çalışma koşulları sağlayarak bilgilerini değerli öğrencilerimize en ileri düzeyde aktarmalarını sağlamayı amaçlayan 9 lise öğrencisinden oluşan bir ekibiz. Tek gayemiz eğitiminiz..."]
return(
<div className="">
    <div className="w-full flex flex-row space-x-5 px-5">
        <div className="text-xl  flex flex-col space-y-4">
            <div className="flex flex-row space-x-2"id="BizKimiz" >
                <img src="/images/attachment.svg" alt="" className="w-16"/>
                <h1 className="flex items-center text-3xl font-semibold">Biz kimiz</h1>
            </div>
            <div>
                {text[0]}   
            </div>
        </div>
    </div>
</div>
)
}