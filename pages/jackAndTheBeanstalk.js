import Layout from "../components/layout";
import Hero from "../components/hero";
import TWSshowpage from "/public/TWSshowpage.webp";
import GoToProductions from "../components/utilities/goToProductionButton";
import TwoTextCards from "../components/twoTextCards";
// import { Gallery } from "react-photoswipe-gallery";
// import GalleryImgCard from "../components/galleryImgCard";

// const ShowImages = [
//   {
//     id: 1,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199060/TWS-HTC/TWS-bride_pp760o.jpg",
//     width: "667",
//     height: "1000",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199060/TWS-HTC/TWS-bride_pp760o.jpg",
//   },
//   {
//     id: 2,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199010/TWS-HTC/TWS-nana_pynahr.jpg",
//     width: "667",
//     height: "1000",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199010/TWS-HTC/TWS-nana_pynahr.jpg",
//   },
//   {
//     id: 3,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199017/TWS-HTC/TWS-groom_mrluor.jpg",
//     width: "1000",
//     height: "667",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199017/TWS-HTC/TWS-groom_mrluor.jpg",
//   },
//   {
//     id: 4,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199035/TWS-HTC/TWS-blue-dance_jhstmz.jpg",
//     width: "1100",
//     height: "667",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199035/TWS-HTC/TWS-blue-dance_jhstmz.jpg",
//   },
//   {
//     id: 5,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655198616/TWS-HTC/TheWeddingSinger_smqscr.webp",
//     width: "1200",
//     height: "800",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655198616/TWS-HTC/TheWeddingSinger_smqscr.webp",
//   },
//   {
//     id: 6,
//     original:
//       "https://res.cloudinary.com/dax2w65/image/upload/v1655199014/TWS-HTC/TWS3_w22gk3.jpg",
//     width: "2048",
//     height: "1365",
//     alt: "The Wedding Singer",
//     src: "https://res.cloudinary.com/dax2w65/image/upload/c_fit,h_175,w_175/v1655199014/TWS-HTC/TWS3_w22gk3.jpg",
//   },
// ];

// function ShowGallery(src) {
//   const imgCards = ShowImages.map((item) => {
//     return <GalleryImgCard key={item.id} {...item} />;
//   });

//   return (
//     <div className="pb-20">
//       <div className="container flex items-center bg-inherit justify-center pb-10 py-5 shadow-2xl shadow-cyan-400/50 ">
//         <Gallery>
//           <div className="grid gap-20 grid-cols-2 md:grid-cols-3">{imgCards}</div>
//         </Gallery>
//       </div>
//     </div>
//   );
// }



function JackAndTheBeanStalk() {
  return (
    <>
      <Hero
        title="Jack And The Beanstalk"
        paragraph="Epworth Centre - 25 to 29 January 2023"
        imageSrc="/JATBshowpage.webp"
        width={1688}
        height={1160}
        alt="Jack And The Beanstalk at The Epworth Centre January 2023"
        button="News and information"
        linkToPage="#show-description"
      />

      <div className="container  pt-3  flex justify-end">
        <GoToProductions />
      </div>
      <h2 className="h2-brand my-16">Jack And The Beanstalk</h2>
      <div className="pb-12" id="show-description">
        <TwoTextCards
          text1="Our 2023 pantomime will be Jack and the Beanstalk which will be
          co-directed and choreographed by Sophie Greenaway and
          Bethany Lyne with Ashley Chinn as Musical Director."
          text2="Performance dates will be 25th January – 29th January. The show will be launched on 16th August, downstairs at the Epworth Centre at 7:30pm, with auditions taking place on Sunday 21st August from 10am and rehearsals will start in early September."
          text5="If you have any questions prior to the launch please contact Sophie or Beth through the usual channels or email them at soph_greenaway@hotmail.com or bethany.lyne@hotmail.co.uk"
        />
      </div>
      {/* <div className="container">
        <ShowGallery src={ShowImages} />
      </div> */}
    </>
  );
}

JackAndTheBeanStalk.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}   
    </Layout>
  );
};

export default JackAndTheBeanStalk;
