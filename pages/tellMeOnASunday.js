import Layout from "../components/layout";
import Hero from "../components/hero"
import TMOASshowpage from "/public/TMOASshowpage.webp";
import GoToProductions from "../components/utilities/goToProductionButton"
import TwoTextCards from "../components/twoTextCards";
import { Gallery } from "react-photoswipe-gallery";
import GalleryImgCard from "../components/galleryImgCard";

const ShowImages = [
  {
    id: 1,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655206380/TMOAS-HTC/TMOAS-Steph_ylb8p1.jpg",
    width: "1000",
    height: "667",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655206380/TMOAS-HTC/TMOAS-Steph_ylb8p1.jpg",
  },
  {
    id: 2,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655206380/TMOAS-HTC/TMOAS-Charlotte_tjfakn.jpg",
    width: "1000",
    height: "667",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175//v1655206380/TMOAS-HTC/TMOAS-Charlotte_tjfakn.jpg",
  },
  {
    id: 3,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655206380/TMOAS-HTC/TMOAS-Grace_wsltni.jpg",
    width: "1000",
    height: "667",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655206380/TMOAS-HTC/TMOAS-Grace_wsltni.jpg",
  },
  {
    id: 4,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655206382/TMOAS-HTC/TMOASS_qmbofh.webp",
    width: "1100",
    height: "775",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655206382/TMOAS-HTC/TMOASS_qmbofh.webp",
  },
  {
    id: 5,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655206381/TMOAS-HTC/TMOASG_vtqtwp.webp",
    width: "1110",
    height: "1113",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655206381/TMOAS-HTC/TMOASG_vtqtwp.webp",
  },
  {
    id: 6,
    original:
      "https://res.cloudinary.com/dax2w65/image/upload/v1655206381/TMOAS-HTC/TMOASC_h7yctp.webp",
    width: "1100",
    height: "738",
    alt: "Tell Me Om A Sunday",
    src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655206381/TMOAS-HTC/TMOASC_h7yctp.webp",
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
                <div className="grid gap-20 grid-cols-2 md:grid-cols-3"
                >
                  {imgCards}
                </div>
              </Gallery>
            </div>
          </div>
  );
}



function TMOASMusical() {
  return (
    <>
      <Hero
        title="Tell Me On A Sunday"
        paragraph="Minack Theatre - June 2021"
        imageSrc={TMOASshowpage}
        alt="Tell Me On A Sunday musical at the Minack Theatre June 2021"
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
        button="Enter the show"
        linkToPage="#show-description"
      />

      <div className="container pt-3 flex justify-end">
        <GoToProductions />
      </div>
      <div id="show-description">
        <TwoTextCards
          title="Tell Me On A Sunday"
          text1="Written in 1979, Tell Me on a Sunday is the story tells of a girl, Emma, from Muswell Hill who travels to the US in search of
          love.Her romantic misadventures begin in New York City and lead
          her to Hollywood before returning to Manhattan. The story is told
          through a song cycle with no spoken dialogue."
          text2="The show includes many well-known numbers including: Take That Look Off Your Face, The Last Man In My Life, Come Back with The
           Same Look In Your Eyes, Tell Me On A Sunday, Unexpected Song."
        />
      </div>
      <ShowGallery src={ShowImages} />
    </>
  );
}

TMOASMusical.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page} 
    </Layout>
  );
};

export default TMOASMusical;
