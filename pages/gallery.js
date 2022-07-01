import Hero from "../components/hero";
import Layout from "../components/layout";
import Link from "next/link";
import tiobe from "/public/TIOBEhomepage.webp";
import { Gallery } from "react-photoswipe-gallery";
import GalleryImgCard from "../components/galleryImgCard";
import data from "../components/GalleryData/galleryData";
import data2 from "../components/GalleryData/galleryDataPlus";
import H2Heading from "../components/utilities/h2Heading";
import ToggleButton from "../components/utilities/readMoreLessButton";


function GoBackButton() {
  return (
    <>
      <p className="text-lg p-3 rounded-l-lg text-black">
        <Link href="/">
          <a>
            <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>
            Back to home
          </a>
        </Link>
      </p>
    </>
  );
}

function MyGallery() {
  const imgCards = data.map((item) => {
    return <GalleryImgCard key={item.id} {...item} />;
  });
  const imgCards2 = data2.map((item2) => {
    return <GalleryImgCard key={item2.id} {...item2} />;
  });
  return (
    <>
      <Hero
        title="HELSTON THEATRE COMPANY"
        paragraph="Your preferred Theatre Group in South West Cornwall offer several
        productions throughout the year."
        paragraph2="From Pantos to Musical and Plays,
        we aim to share amazing shows with the support and participation
        of our community. It's where the community is."
        imageSrc={tiobe}
        alt="The Importance of Being Earnest poster for summer 2022 play"
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
        button="Explore our gallery"
        linkToPage="#gallery"
      />

      <div className="section-global bg-white" id="gallery">  
          <div className="container md:-mt-12 flex justify-end">
            <GoBackButton />
          </div>
          <div className="section-global container md:-mt-12" id="gallery">
           <H2Heading 
           h2heading = "Gallery"
           />
            <div className="pt-12">
              <Gallery withCaption>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    columnGap: "15px",
                    rowGap: "15px",
                  }}
                >
                  {imgCards}
                </div>
                <div className="mx-auto pt-12">
                  <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg pt-6 rounded-lg shadow-none">
                      <summary class="text-2xl text-prima font-bold text-center py-2 rounded bg-neutral-50 w-48 mx-auto">
                <ToggleButton />
              </summary>
                <div className="pt-16"
                style={{
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          columnGap: "15px",
                          rowGap: "15px",
                        }}
                  >
                    {imgCards2}
                </div>
              
              
                </details>
                </div>
              </Gallery>
            </div>
          </div>
        </div>
  
      <div className="border-t-2 p-2"></div>
    </>
  );
}

MyGallery.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default MyGallery;
