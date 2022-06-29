import Head from "next/head";
import Navigation from "./navigation";
import ScrollToTop from "./utilities/ScrollToTop";
import Footer from "./footer";
import ContactBanner from "./contactBanner";

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
      <Navigation />
     
      <main className="bg-brand-gradient text-neutral-50">{children}</main>  
      <ContactBanner />
      <Footer />
    </>
  );
}

export default Layout
