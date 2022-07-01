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
        paragraph="From Pantos to Musical and Plays,
        we aim to share amazing shows with the support and participation
        of our community. It's where the community is."
        imageSrc={tiobe}
        alt="The Importance of Being Earnest poster for summer 2022 play"
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
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
