import Layout from "../components/layout";
import Hero from "../components/hero";
import TWSshowpage from "/public/TWSshowpage.webp";
import GoToProductions from "../components/utilities/goToProductionButton";
import TwoTextCards from "../components/twoTextCards";
import { Gallery } from "react-photoswipe-gallery";
import GalleryImgCard from "../components/galleryImgCard";

const ShowImages = [
  {
    id: 1,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655199060/TWS-HTC/TWS-bride_pp760o.jpg",
    width: "667",
    height: "1000",
    alt: "The Wedding Singer",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199060/TWS-HTC/TWS-bride_pp760o.jpg",
  },
  {
    id: 2,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655199010/TWS-HTC/TWS-nana_pynahr.jpg",
    width: "667",
    height: "1000",
    alt: "The Wedding Singer",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199010/TWS-HTC/TWS-nana_pynahr.jpg",
  },
  {
    id: 3,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655199017/TWS-HTC/TWS-groom_mrluor.jpg",
    width: "1000",
    height: "667",
    alt: "The Wedding Singer",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199017/TWS-HTC/TWS-groom_mrluor.jpg",
  },
  {
    id: 4,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655199035/TWS-HTC/TWS-blue-dance_jhstmz.jpg",
    width: "1100",
    height: "667",
    alt: "The Wedding Singer",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199035/TWS-HTC/TWS-blue-dance_jhstmz.jpg",
  },
  {
    id: 5,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655198616/TWS-HTC/TheWeddingSinger_smqscr.webp",
    width: "1200",
    height: "800",
    alt: "The Wedding Singer",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655198616/TWS-HTC/TheWeddingSinger_smqscr.webp",
  },
  {
    id: 6,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655199014/TWS-HTC/TWS3_w22gk3.jpg",
    width: "2048",
    height: "1365",
    alt: "The Wedding Singer",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199014/TWS-HTC/TWS3_w22gk3.jpg",
  },
];

function ShowGallery(src) {
  const imgCards = ShowImages.map((item) => {
    return <GalleryImgCard key={item.id} {...item} />;
  });

  return (
    <div className="pb-20">
      <div className="container flex items-center bg-inherit justify-center pb-10 py-5 shadow-2xl shadow-cyan-400/50 ">
        <Gallery>
          <div className="grid gap-20 grid-cols-2 md:grid-cols-3">{imgCards}</div>
        </Gallery>
      </div>
    </div>
  );
}



function TheWeddingSinger() {
  return (
    <>
      <Hero
        title="The Wedding Singer"
        paragraph="Epworth Centre - April 2022"
        imageSrc={TWSshowpage}
        alt="The Wedding Singer musical at the Epworth Centre April 2022"
        button="Enter the show"
        linkToPage="#show-description"
      />

      <div className="container pt-3  flex justify-end">
        <GoToProductions />
      </div>
      <div id="show-description">
        <TwoTextCards
          title="The Wedding Singer"
          text1="Based on the Hollywood movie starring Adam Sandler and Drew
            Barrymore, comes a hilarious musical comedy that celebrates all
            the fun of the ’80s. Yes, hair is big, collars are up, and it’s
            packed to the brim with feel-good moments that will make you
            smile."
          text2="Robbie Hart is New Jersey’s number one wedding singer and the life of the party. That is until his own fiancee strands him at the altar. Bitter and broken, Robbie begins to make every wedding as disastrous as his own until a warm-hearted waitress named Julia intervenes. Only trouble is, Julia’s about to be-you guessed it-married! Can Robbie pull off the performance of the decade and win the girl of his dreams?"
        />
      </div>
      <ShowGallery src={ShowImages} />
    </>
  );
}

TheWeddingSinger.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}   
    </Layout>
  );
};

export default TheWeddingSinger;
