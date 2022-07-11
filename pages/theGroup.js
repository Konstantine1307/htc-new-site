import TextCard from "../components/utilities/textCard";
import H2Heading from "../components/utilities/h2Heading";
import Image from "next/image";
import MyFair from "/public/theGroup-MyFairLady.webp";
import JamaicaInn from "/public/theGroup-JamaicaInn.webp";

const TheGroup = () => {
  return (
    <section className="section-global container pt-6" id="thegroup">
      <H2Heading h2heading="The Group"/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center px-3">
        <div className="col-span-1 md:col-span-2 flex-auto w-90 mx-auto  md:w-full mt-10 ">
          <Image
            src={MyFair}
            width={876}
            height={533}
            layout="intrinsic"
            className="rounded-lg"
            alt="My Fair Lady at the Epworth Hall"
          />
        </div>
        <TextCard
          text="We are a non-professional theatre company in Helston, on the southern tip
              of Cornwall. We have around 100 members, but put on productions
              that meet the standard of much larger companies in the area."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-10 md:mt-20 px-3">
        <TextCard text="Most of our productions are staged in the Epworth Hall, but we do occasionally tour to other venues in the county. We are a member of both Cornwall Drama Association, and National Operative & Dramatic Association and have taken part in the All England One Act Play Festival. We are always looking for new members to join us so do get in touch via the Contact page." />
        <div className="flex-auto w-90 mx-auto md:w-full ">
          <Image
            src={JamaicaInn}
            width={708}
            height={422}
            layout="intrinsic"
            className="rounded-lg"
            alt="Jamaica Inn at Trebah Gardens"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-10 md:mt-20 px-2 space-y-4" id="awards">
        <p className="text-lg text-center font-light text-white">
          Helston Theatre Company has awarded Life Membership to the following members for their individual contribution to the group:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mx-auto">
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i> George Bilkey
          </span>
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i> Sally Blabler
          </span>
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i> Elaine Downie
          </span>
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i> Jonathan Geer
          </span>
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i> Chris Malton
          </span>
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i>Nicky Roberts
          </span>
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i> Liz Rose
          </span>
          <span>
            <i className="fa-solid fa-heart text-prima pr-2"></i> Jeane Unwin
          </span>
        </div>
      </div>
    </section>
  );
};

export default TheGroup;
