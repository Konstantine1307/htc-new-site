import Layout from "../components/layout";
import Hero from "../components/hero";
import RHshowpage from "/public/RHshowpage.webp";
import GoToProductions from "../components/utilities/goToProductionButton";
import TwoTextCards from "../components/twoTextCards";
import { Gallery } from "react-photoswipe-gallery";
import GalleryImgCard from "../components/galleryImgCard";

const ShowImages = [
  {
    id: 1,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655203823/Robin-HTC/robin-dame_zstotp.jpg",
    width: "960",
    height: "640",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655203823/Robin-HTC/robin-dame_zstotp.jpg",
  },
  {
    id: 2,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655203814/Robin-HTC/robin-thiefs_prde5e.jpg",
    width: "1000",
    height: "667",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655203814/Robin-HTC/robin-thiefs_prde5e.jpg",
  },
  {
    id: 3,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655203771/Robin-HTC/robin-finale_yo62zn.jpg",
    width: "1000",
    height: "667",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655203771/Robin-HTC/robin-finale_yo62zn.jpg",
  },
  {
    id: 4,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655203768/Robin-HTC/robin-dance_t98xos.jpg",
    width: "1000",
    height: "667",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655203768/Robin-HTC/robin-dance_t98xos.jpg",
  },
  {
    id: 5,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655203758/Robin-HTC/robin-couple_wwfuqh.jpg",
    width: "960",
    height: "640",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655203758/Robin-HTC/robin-couple_wwfuqh.jpg",
  },
  {
    id: 6,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655203756/Robin-HTC/robin-banner_jphrwq.jpg",
    width: "1000",
    height: "667",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655203756/Robin-HTC/robin-banner_jphrwq.jpg",
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




function RobinHood() {
  return (
    <>
      <Hero
        title="Robin Hood"
        paragraph="Epworth Centre - January 2022"
        imageSrc={RHshowpage}
        alt="Robin Hood Pantomime at the Epworth Centre January 2022"
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
        button="Enter the show"
        linkToPage="#show-description"
      />

      <div className="container pt-3  flex justify-end">
        <GoToProductions />
      </div>
      <TwoTextCards
        title="Robin Hood"
        text1="The annual family pantomime returns to Helston this January! Our hero Robin is king of the forest, stealing from the rich to help the poor. But the Sheriff is hot on his heels and Robin can only escape from his clutches so many times! "
        text2="Expect capers, high jinx, songs and magic to delight children and adults of all ages."
      />
      <ShowGallery />
    </>
  );
}

RobinHood.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}   
    </Layout>
  );
};

export default RobinHood;
