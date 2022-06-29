import Layout from "../components/layout";
import Hero from "../components/hero";
import tiobe from '/public/TIOBEhomepage.jpg'
import TheGroup from "../components/theGroup"
import CardDown from "../components/customcards/cardDown";
import CardUp from "../components/customcards/cardUp";
import ContactBanner from "../components/contactBanner";
import TwsShowPage from "/public/TWSshowpage.webp"
import Image from "next/image";

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
            backImage='url("/card-background1.jpg")'
            titleCard="3+ Shows/year"
            paragraph="Pantos, Musicals, Plays"
            anchor="/productions"
            buttonCard="Find out more"
          />
          <CardUp
            backImage='url("/card-background5.jpg")'
            titleCard="100+ Members"
            paragraph="For the community"
            anchor="/about"
            buttonCard="Find out more"
          />
          <CardDown
            backImage='url("/card-background1.jpg")'
            titleCard="52+ Awards"
            paragraph="Share our success"
            anchor="#awards"
            buttonCard="Find out more"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid gap-4 md:grip-cols-3 w-1/3">
          <div className="relative group">
            <Image src={TwsShowPage} alt="" className="w-72" />
            <div className="absolute bottom-0 top-0 left-0 right-0 bg-white opacity-75">
              <div className="flex justify-between w-full">
                <div className="font-normal text-black">
                  <p className="text-xl text-black">
                    Hello
                  </p>
                  <p>Hello again</p>
                </div>
              </div>
            </div>
          </div>
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
      <ContactBanner /> 
    </Layout>
  );
};

export default Index
