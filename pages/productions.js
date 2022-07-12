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
        button="Discover the plot!"
        linkToPage="/tiobe"
        imageSrc={tiobe}
        width={488}
        height={690}
        layout="intrinsic"
      />

      <div className="container pt-3 flex justify-end">
        <GoBackButton />
      </div>
      <div className="container mx-auto px-4 md:mt-12 mb-32">
        <h2 className="h2-brand mb-16">Future Productions</h2>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <CardDown
            backImage='url("/JATBshowpage-small.webp")'
            titleCard="Jack & The Beanstalk"
            paragraph2="25 - 29 January 2023"
            anchor="/jackAndTheBeanstalk"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/SToddshowpage.webp")'
            titleCard="Sweeney Todd"
            paragraph2="23 - 29 April 2023"
            anchor="/sweeneyTodd"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/Evitashowpage.webp")'
            titleCard="Evita"
            paragraph2="September 2023"
            anchor="/evita"
            buttonCard="Find Out More"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:mt-12">
        <h2 className="h2-brand mb-16">Recent Productions</h2>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <CardUp
            backImage='url("/TWSshowpage-small.webp")'
            titleCard="the wedding singer"
            paragraph2="April 2022"
            anchor="/theWeddingSinger"
            buttonCard="Join the party!"
          />
          <CardUp
            backImage='url("/TMOASshowpage-small.webp")'
            titleCard="tell me on a sunday"
            paragraph2="June 2021"
            anchor="/tellMeOnASunday"
            buttonCard="See the journey"
          />
          <CardUp
            backImage='url("/RHshowpage-small.webp")'
            titleCard="robin hood 
            panto "
            paragraph2="January 2022"
            anchor="/robinHood"
            buttonCard="Annual Panto"
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
