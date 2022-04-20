import Tilt from "react-tilt";

export const TeamCard = ({
  CardName,
  CardDepartment,
  CardDescription,
  CardMedia,
  CardImage,
}) => {
  return (
    <div className="bg-[#fcf3ea] rounded-2xl w-[22rem] lg:w-96 lg:px-12 shadow-xl flex flex-col items-center py-5">
      <div className="pt-12">
        <img
          className="rounded-full border-4 border-[#5065a5]"
          src={CardImage === "" ?  "https://pbs.twimg.com/profile_images/419098137710448640/AwZGWOKu_400x400.jpeg" : CardImage}
          width="150"
        />
      </div>
      <div className="text-3xl lg:text-4xl pt-6">{CardName}</div>
      <div className="text-lg lg:text-xl pt-2 text-gray-400">{CardDepartment}</div>
      <div className="text-lg text-center px-4 lg:text-left lg:text-xl lg:px-8 pt-6">{CardDescription}</div>
      <div className="pt-12 flex justify-center space-x-4">
        <a href={CardMedia[0]}>
          <img className="w-12 hover:cursor-pointer" onClick={() => window.open("/", "_blank")} src="/images/instagram.svg" alt="" />
        </a>
        <a href={CardMedia[1]}>
          <img className="w-12 hover:cursor-pointer" onClick={() => window.open("/", "_blank")} src="/images/github.svg" alt="" />
        </a>
        <a href={CardMedia[2]}>
          <img className="w-12 hover:cursor-pointer" onClick={() => window.open("/", "_blank")} src="/images/twitter.svg" alt="" />
        </a>
        <a href={CardMedia[3]}>
          <img className="w-12 hover:cursor-pointer" onClick={() => window.open("/", "_blank")} src="/images/email.svg" alt="" />
        </a>
      </div>
    </div>
  );
};
