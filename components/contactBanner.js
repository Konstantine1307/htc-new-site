import Link from "next/link";
import ButtonCard from "./utilities/buttonCard";

// Contact banner above footer

const ContactBanner = () => {
  return (
    <div className="section-global columns-1  px-33 md:px-5 text-center w-70 mx-auto ">
      <h3 className="text-3xl md:text-4xl mb-2 text-center text-prima">
        Interested in finding out more?
      </h3>
      <p className="text-black text-lg mb-4">
        We are an all inclusive group and we would love to have you on board.
      </p>
      <Link href="/contact">
        <a href="/contact">
          <ButtonCard buttonCard="Get in touch" />
        </a>
      </Link>
    </div>
  );
};

export default ContactBanner;
