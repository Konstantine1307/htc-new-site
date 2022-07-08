import Layout from "../components/layout";
import Hero from "../components/hero";
import GoBackButton from "../components/utilities/goBackButton";
import PastProductions from "../components/pastProductions";
import tiobe from "/public/TIOBEhomepage.webp";
import CardUp from "../components/customcards/cardUp";
import CardDown from "../components/customcards/cardDown";



function Productions() {
  return (
    <>
      <Hero
        title="OUR NEXT PRODUCTION"
        paragraph="Duplicity and deception, hilarity and handbags!
        Laugh out loud as Helston Theatre Company bluff and bluster their way through Oscar Wilde’s last and most loved comedy, The Importance of Being Earnest."
        button="More Info"
        linkToPage="/tiobe"
        imageSrc={tiobe}
        width={488}
        height={690}
        layout="intrinsic"
      />

      <div className="container pt-3 flex justify-end">
        <GoBackButton />
      </div>

      <div className="container mx-auto px-4 md:mt-12">
        <div className="flex flex-wrap">
          <CardDown
            backImage='url("/TWSshowpage-small.webp")'
            titleCard="the wedding singer"
            paragraph="April 2022"
            anchor="/theWeddingSinger"
            buttonCard="Find out more"
          />
          <CardUp
            backImage='url("/TMOASshowpage-small.webp")'
            titleCard="tell me on a sunday"
            paragraph="June 2021"
            anchor="/tellMeOnASunday"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/RHshowpage-small.webp")'
            titleCard="robin hood 
            panto "
            paragraph="January 2022"
            anchor="/robinHood"
            buttonCard="Find out more"
          />
        </div>
      </div>
    </>
  );
}

Productions.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}      
      <PastProductions /> 
    </Layout>
  );
};

export default Productions;
