import Link from "next/link";
import ButtonCard from "../utilities/buttonCard";


function Overlay() {
  return (
    <div className="overlay absolute top-0 left-0 md:left-4 bottom-6 md:bottom-12 right-0 md:right-4 bg-slate-900 opacity-75 rounded-2xl"></div>
  );
}



function CardUp(props) {
  const backImgBackGround = {
    backgroundImage: `${props.backImage}`,
   
  };

  return (
    <>
      <div className="relative  w-3/4 md:w-4/12 mx-auto  md:px-4 text-center hover:scale-105 duration-300">
        <div className="bg-cover rounded-2xl" style={backImgBackGround}>
          {/* Overlay */}
          <Overlay />
          <div className="relative mb-6 rounded-lg bg-gradient-to-t hover:from-pink-500 hover:to-cyan-500 duration-150">
            <Link href={props.anchor} target={props.target} rel="noreferrer">
              <a
                target={props.target}
                rel="noreferrer"
               
              >
                <div className="py-6 hover:text-black">
                  <p className="text-2xl font-semibold uppercase px-3">
                    {props.titleCard}
                  </p>
                  <p className="font-light text-base lg:text-xl">
                    {props.paragraph}
                    <br />
                    {props.paragraph2}
                    <br />
                    {props.paragraph3}
                    <br />
                  </p>
                  <ButtonCard buttonCard={props.buttonCard} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardUp;
