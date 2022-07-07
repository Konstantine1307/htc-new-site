import Head from "next/head";
// import Navigation from "./navigation";
import Example from "./barNavigation";
import ScrollToTop from "./utilities/ScrollToTop";
import Footer from "./footer";
import ContactBanner from "../pages/contactBanner";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Helston Theatre Company</title>
        <meta
          name="description"
          content="Check out our next productions and all the information about us. Visit wwww.helstontheatrecompany.co.uk"
          key="desc"
        />
      </Head>
      <ScrollToTop />
      <Example />
     
      <main className="bg-brand-gradient text-neutral-50">{children}</main>  
      <ContactBanner />
      <Footer />
    </>
  );
}

export default Layout
