export const HeroText = () => {
    const texts = ["Eğitime yeni bir soluk, başarıya online bir yolculuk...", "Hak ettiği işi bulamayan öğretmenlerimizi ve maddi açıdan kısıtlı imkanlara sahip öğrencilerimizi online bir ortamda bir araya getirmek, eğitimde fırsat eşitliğine katkıda bulunmak bizim misyonumuzdur"]
    return (
        <div className="flex flex-col 2xl:space-y-8 lg:items-start md:items-center space-y-8 ">
            <div className="flex flex-col 2xl:space-y-8 2xl:w-full lg:w-full md:space-y-8 md:w-5/6 space-y-4" style={{"fontFamily": "'Hind', sans-serif"}}>
                <div className="2xl:text-5xl lg:text-left lg:text-5xl text-2xl font-bold text-gray-100 leading-snug">{texts[0]}</div>
                <div className="2xl:text-xl lg:text-left text-xl text-gray-100 pr-8">{texts[1]}</div>
            </div>
            <button onClick={() => window.location.hash = "about"} className="md:w-2/3 bg-transparent hover:bg-blue-300 text-blue-300 hover:text-white py-2 px-8 lg:w-2/6 border border-blue-300 hover:border-transparent rounded text-2xl">
                Biz Kimiz?
            </button>
        </div>
    )
}