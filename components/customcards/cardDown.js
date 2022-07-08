import Link from "next/link";
import ButtonCard from "../utilities/buttonCard";

function Overlay() {
  return (
    <div className="overlay absolute top-6 left-0 md:left-4 bottom-14 right-0 md:right-4 bg-slate-900 opacity-75 rounded-2xl"></div>
  );
}

function CardDown(props) {
  const backImgBackGround = {
    backgroundImage: `${props.backImage}`,
    borderRadius: "1rem",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundCover: "center center",
  };

  return (
    <div className="relative py-6 w-3/4 md:w-4/12 mx-auto md:px-4 text-center hover:scale-105 duration-300">
      {/* Image background */}
      <div className="background-image" style={backImgBackGround}>
        {/* Overlay */}
        <Overlay />
        <div className="relative flex flex-col mb-8 rounded-lg">
          <Link href={props.anchor} target={props.target} rel="noreferrer">
            <a
              target={props.target}
              rel="noreferrer"
              className="hover:text-pink-100 duration-300"
            >
              <div className="py-4">
                <p className="text-2xl lg:text-3xl font-semibold  uppercase pb-3 px-3">
                  {props.titleCard}
                </p>
                <p className="font-light text-base lg:text-xl pb-3">
                  {props.paragraph}
                  <br />
                  {props.paragraph2}
                  <br />
                  {props.paragraph3}
                </p>
                <ButtonCard buttonCard="Find out more" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardDown;
