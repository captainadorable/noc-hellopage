export const HeroText = () => {
    const texts = ["Eğitime yeni bir soluk, başarıya online bir yolculuk...", "Hak ettiği işi bulamayan öğretmenlerimizi ve maddi açıdan kısıtlı imkanlara sahip öğrencilerimizi online bir ortamda bir araya getirmek, eğitimde fırsat eşitliğine katkıda bulunmak bizim misyonumuzdur"]
    return (
        <div className="flex flex-col space-y-8 ">
            <div className="flex flex-col space-y-4" style={{"font-family": "'Hind', sans-serif"}}>
                <div className="lg:text-5xl text-2xl font-bold text-gray-100 leading-snug">{texts[0]}</div>
                <div className="text-xl text-gray-100 pr-8">{texts[1]}</div>
            </div>
            <button class="bg-transparent hover:bg-blue-300 text-blue-300 hover:text-white py-2 px-8 lg:w-1/4 border border-blue-300 hover:border-transparent rounded text-2xl">
                Biz Kimiz?
            </button>
        </div>
    )
}