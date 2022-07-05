
import Image from "next/image";
import Link from "next/link";
import ButtonCard from "./utilities/buttonCard";

function Hero({title, subtitle, paragraph,paragraph2, imageSrc, alt, width, height, linkToPage, button,}) {
  const backgroundHero = {
    backgroundImage: 'url("/paul-green-bg-hero.webp")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "700px",
    paddingBottom: "50px",
  };
  return (
    <section
      className="flex items-center justify-center  "
      style={backgroundHero}
    >
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-12 md:space-x-12">
        <div className="block md:hidden px-10 text-center mt-5 pb-5">
          <h1 className="font-heading text-white text-4xl pb-3">{title}</h1>
          <h2 className="font-sans tracking-wide text-white pb-8">
            {subtitle}
          </h2>
          <p className="text-md md:text-xl tracking-wide text-white pb-3">
            {paragraph}
            <br />
            {paragraph2}
          </p>
          <Link href={`${linkToPage}`}>
            <a href={`${linkToPage}`}>
              <ButtonCard buttonCard={button} />
            </a>
          </Link>
        </div>
        <div className=" max-w-sm md:max-w-2xl ">
          <Image src={imageSrc} alt={alt} width={width} height={height} className="md:px-6" />
        </div>
        <div className="hidden md:block max-w-md md:pr-4 text-center md:motion-safe:animate-fadeIn duration-500">
          <h1 className="font-heading md:text-3xl lg:text-4xl tracking-wider  text-white pb-3">
            {title}
          </h1>
          <h2 className="font-sans tracking-wide text-white pb-8">
            {subtitle}
          </h2>
          <p className="text-sm md:text-xl text-white tracking-wide pb-3">
            {paragraph}
            <br />
            <br />
            {paragraph2}
          </p>
          <Link href={`${linkToPage}`}>
            <a>
              <ButtonCard buttonCard={button} />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
