
import H2Heading from "./utilities/h2Heading";
import Image from "next/image";
import Chairman from "/public/welcome-htc-chairman.webp"

const Welcome = () => {
  return (
    <section className="section-global container pt-6 md:pt-3" id="chairman-message">
      <H2Heading h2heading="Welcome" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24 md:mt-20 px-3">
        <div className="text-lg text-justify font-light text-white">
          <p className="pb-3">
            I first became involved in non-professional theatre in Helston in
            1977 when I joined Meneage Arts Players for their pantomime Mother
            Goose. That was the start of a lifelong passion for the theatre and
            I am very proud to be the current Chairman of Helston Theatre
            Company which was born from the coming together of Meneage Arts
            Players and Helston Musical Theatre Company in 2010.
          </p>
          <p className="pb-3">
            Our versatile and talented company present up to 4 major productions
            each year making us one of the busiest amateur theatre companies in
            Cornwall drawing members from Penzance to Truro. We pride ourselves
            on presenting the very best theatre and it is great to see us
            receiving wider recognition of our work from The Cornwall Drama
            Association and National Operatic and Dramatic Association.
          </p>
          <p className="pb-4">
            Whether performing on-stage; working back stage or greeting
            our audience front of house, our members are the lifeblood of the
            company and we are always looking for new people to join our theatre
            family. If you would like to be involved please see the information
            elsewhere on this website; you’ll be very welcome. 
          </p>
          <p className="italic text-end">Paul Blaber</p>
          <p className="italic text-end">Chairman</p>
        </div>
        <div className="flex-auto w-75 mx-auto md:w-full">
          <Image
            src={Chairman}
            className="rounded-lg brightness-110 drop-shadow-2xl"
            alt="Paul Blaber - Helston Theatre Company Chairman Person"
            layout="responsive"
                 />
        </div>
      </div>
    </section>
  );
};

export default Welcome