import Layout from "../components/layout";
import Hero from "../components/hero";
import tiobe from '/public/TIOBEhomepage.webp'
import TheGroup from "./theGroup"
import CardDown from "../components/customcards/cardDown";
import CardUp from "../components/customcards/cardUp";
import Welcome from "../components/welcome";


function Index() {
  return (
    <>
      <Hero
        title="HELSTON THEATRE COMPANY"
        paragraph="From Pantomimes to Musicals and Plays,
        we aim to perform amazing theatre with the support and participation
        of our community. It's where the community is."
        imageSrc={tiobe}
        width={488}
        height={690}
        layout="intrinsic"
        alt="The Importance of Being Earnest poster for summer 2022 play"
        button="Next Production"
        linkToPage="/tiobe"
      />
      <div className="container mx-auto px-4 pt-4 md:mt-12">
        <div className="flex flex-wrap">
          <CardDown
            backImage='url("/card-background1.webp")'
            titleCard="3+ Shows/year"
            paragraph="Pantos, Musicals, Plays"
            anchor="/productions"
            buttonCard="Find out more"
          />
          <CardUp
            backImage='url("/card-background5.webp")'
            titleCard="100+ Members"
            paragraph="For the community"
            anchor="/about"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/card-background1.webp")'
            titleCard="52+ Awards"
            paragraph="Share our success"
            anchor="/about/#awards"
            buttonCard="Find out more"
          />
        </div>
      </div>
    </>
  );
}


Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <TheGroup />
      <Welcome />
     
    </Layout>
  );
};

export default Index
