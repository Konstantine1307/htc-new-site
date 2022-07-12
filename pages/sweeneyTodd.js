import Layout from "../components/layout";
import Hero from "../components/hero";
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



function SweeneyTodd() {
  return (
    <>
      <Hero
        title="Sweeney Todd"
        paragraph="Epworth Centre - 23 to 29 April 2023"
        imageSrc="/SToddshowpage.webp"
        width={1688}
        height={1160}
        alt="Sweeney Todd at The Epworth Centre April 2023"
        button="News and information"
        linkToPage="#show-description"
      />

      <div className="container  pt-3  flex justify-end">
        <GoToProductions />
      </div>
      <h2 className="h2-brand my-16">Sweeney Todd</h2>
      <div className="pb-12" id="show-description">
        <TwoTextCards
          text1="In April 2023 we will, at last, present Stephen Sondheim’s grisly
        musical thriller, Sweeney Todd: The Demon Barber of Fleet Street, a
          superb and challenging show which tells the story of blood-soaked,
        all-consuming revenge and offers an array of wonderful roles."
          text2="Performances will run from Sunday 23rd April to Saturday 29th April."
          text4="Director - Ben Blaber"
          text6="Musical Director – Millie Millington"
          text8="Musical staging and choreography - Anita O'Hara"
          text5="Further information about the launch and auditions, which will take place in September, will be announced soon. Soloist rehearsals and a few ensemble rehearsals will take place before Christmas and then rehearsals will start for the full company in February. In the meantime, if you have any questions please contact Ben – benblaber29@hotmail.com"
        />
      </div>
      {/* <div className="container">
        <ShowGallery src={ShowImages} />
      </div> */}
    </>
  );
}

SweeneyTodd.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}   
    </Layout>
  );
};

export default SweeneyTodd;
