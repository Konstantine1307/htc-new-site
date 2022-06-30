import Layout from "../components/layout";
import Hero from "../components/hero";
import GoBackButton from "../components/utilities/goBackButton";
import CardUp from "../components/customcards/cardUp";
import CardDown from "../components/customcards/cardDown";
import TheGroup from "./theGroup"
import Awards from "./awards";
import MissionStatementSection from "./statements";
import AboutMembers from "/public/About-htc-members.webp"



function About() {
  return (
    <>
      <Hero
        title="HELSTON THEATRE COMPANY"
        subtitle="believes that accessible live theatre enriches the community."
        imageSrc={AboutMembers}
        alt="Helston Theatre Company 10th Anniversary party"
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
        button="Discover The Group"
        linkToPage="#thegroup"
      />
      <div className="container pt-3  flex justify-end">
        <GoBackButton />
      </div>
      <div className="container mx-auto px-4  md:mt-12">
        <div className="flex flex-wrap">
          <CardDown
            backImage='url("/card-background1.webp")'
            titleCard="awards"
            paragraph="Best of the Best"
            anchor="#awards"
            buttonCard="Find out more"
          />
          <CardUp
            backImage='url("/card-background5.webp")'
            titleCard="The Group"
            paragraph="For the community"
            anchor="#thegroup"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/card-background1.webp")'
            titleCard="Statements"
            paragraph="Policies"
            anchor="#mission"
            buttonCard="Find out more"
          />
        </div>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <Layout> 
      {page}
      <TheGroup />
      <Awards />
      <MissionStatementSection /> 
    </Layout>
  );
};

export default About;
