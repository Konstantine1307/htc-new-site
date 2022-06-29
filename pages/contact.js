import Layout from "../components/layout";
import Hero from "../components/hero";
import tiobe from "../public/TIOBEhomepage.webp"
import Image from "next/image";
import ContactForm from "../components/contactSection/contact-form";

const ContactSection = () => {
    return (
      <>
        <section className="section-global bg-neutral-50 text-black">       
          <div className="container">          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="">
                <ContactForm />
              </div>
              <div className="">
                <p className="md:text-xl py-5 pr-3">
                  Support Helston Theatre Company for free by using <span className="font-bold">Easy
                  Fundraising</span>.
                </p>
                <p className="md:text-xl">
                  <a href="https://www.easyfundraising.org.uk/causes/helstontheatre/">
                    {" "}
                    <span className="font-bold">Click Here</span>
                  </a>{" "}
                  to find out more.
                </p>
                <ContactLinks />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

const ContactLinks = () => {

    const contactLinkData = [
        {
            title: "Email",
            text: "info@helstontheatrecompany.co.uk",
            icoUrl: "assets/contact_ico1.svg",
            link: "mailto:treasurer@helstontheatrecompaany.co.uk"
        },
        {
            title: "Phone",
            text: "07890 780855",
            icoUrl: "assets/contact_ico2.svg",
            link: "tel:07890 780855"
        },
        {
            title: "Main Address",
            text: "Epworth Hall, 42 Coinagehall Street, Helston TR13 8EQ",
            icoUrl: "assets/contact_ico3.svg",
            link: "/"
        }
    ]

    return (
      <>
        <section className="section-global bg-neutral-50" id="contact-page">
          <div className="container">
            <div className="grid grid-rows-1 md:grid-rows-3 gap-3">
              {contactLinkData.map((e, i) => (
                <div className="" key={i}>
                  <a href={e.link} className="contact-link">
                    <div className="flex items-center">
                      <Image
                        src={require(`/public/${e.icoUrl}`)}
                        width={50}
                        height={50}
                        alt={e.title}
                      />
                      <div className="ml-3">
                        <div>{e.title}</div>
                        <div>{e.text}</div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}



function Contact() {
  return (
    <>
      <Hero
        title="HELSTON THEATRE COMPANY"
        paragraph="Your preferred Theatre Group in South West Cornwall offer several
        productions throughout the year. From Pantos to Musical and Plays,
        we aim to share amazing shows with the support and participation
        of our community. It's where the community is."
        imageSrc={tiobe}
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
        button = "Stay in touch"
        linkToPage="#contact-page"
      />  
      <ContactSection />     
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>     
      {page}  
    </Layout>
  );
};

export default Contact
