import Layout from "../components/layout";
import Hero from "../components/hero";
import BackToTheGroup from "../components/utilities/backToTheGroupButton";
import H2Heading from "../components/utilities/h2Heading"
import TheGroupMembers from "/public/About-htc-members.webp";


const Awards = () => {
  const awards_data = [
    {
      year: "2019",
      association: "Cornwall Drama Association",
      include: [
        "Best Set in a Musical for Whistle Down the Wind",
        "Technical Achievement",
        "Best Acress in a Musical - Caya Murphy for Whislte Down the Wind",
        "Best Actor in a Musical - Jonathan Tucke for My Fair Lady",
        "Best Pantomime for Dick Whittington ",
      ],
      special: "Special Awards:",
      sp_include: [
        "The Best Steam Train in The Wind in the Willows",
        "Tabitha Lammas as Tabby the Cat in Dick Whittington",
      ],
      secAssociation: "",
      noda_include: [],
      website: "https://www.tgcottage.com",
    },
    {
      year: "2018",
      association: "Cornwall Drama Association",
      include: [
        "Best Musical for Avenue Q",
        "Technical Achievement",
        "Best Direct - Paul Blaber for Avenue Q",
        "Fine Ensemble Playing for Avenue Q",
        "Best Actor in a Musical - Trenton Spear & Russel Hicken for Avenue Q",
        "Best Actress in a Musical - Grace Wallen for Avenue Q",
      ],
      special: "Special Awards:",
      sp_include: [
        "Gary Hunt for the Dame in Snow White and the Seven Dwarves",
        "The Dwarves in Snow White and the Seven Dwarves",
      ],
      secAssociation: "",
      noda_include: [],
      dark: true,
    },
    {
      year: "2017",
      association: "Cornwall Drama Association",
      include: [
        "Best Musical for Rent",
        "Best Director - Paul Blaber for Rent",
        "Outstanding Musical Performance for Rent",
        "Fine Ensemble Playing for Rent",
        "Best Pantomime for Cinderella ",
        "Technical Achievement for Cinderella",
        "Best set for Cinderella",
      ],
      special: "Special Awards:",
      sp_include: [
        "John England & Rob Mitchell for the Ugly Sisters in Cinderella",
        "Jarrad Goldsworthy & Trenton Spear for their pairing in Rent",
        "Anita Smuda for Best Choreography for Cinderella",
      ],
      secAssociation: "",
      noda_include: [],
    },
    {
      year: "2016",
      association: "Cornwall Drama Association",
      include: [
        "Best Musical for Our House",
        "Best Actor - Nathan Hooper for Our House",
        "Outstanding Musical Performance for Our House",
        "Fine Ensemble Playing for Our House",
        "Best Pantomime for Cinderella ",
        "Technical Achievement for Cinderella",
        "Best set for Cinderella",
      ],
      special: "Special Awards:",
      sp_include: [
        "John England & Rob Mitchell for the Ugly Sisters in Cinderella",
        "Jarrad Goldsworthy & Trenton Spear for their pairing in Rent",
        "Anita Smuda for Best Choreography for Cinderella",
      ],
      secAssociation: "",
      noda_include: [],
      dark: true,
    },
    {
      year: "2015",
      association: "Cornwall Drama Association",
      include: [
        "Best Director - Leslie Church for the The Hypochondriac",
        "Best Costumes for Sunset Boulevard",
        "Best Supporting Performance - Gary Hunt for Sunset Boulevard",
        "Best Actress - Helen Hartshorne for Sunset Boulevard  ",
        "Best Set for Sunset Boulevard",
        "Best Musical for Sunset Boulevard",
      ],
      special: "Special Awards:",
      sp_include: [
        "Simon Davies for Priscilla the Goose in Mother Goose",
        "The Goose costume and the Mother Goose Zombies",
        "Outstanding romantic duo for Sunset Boulevard",
      ],
      secAssociation: "Old England 1 Act Play",
      noda_include: [
        "Best Actress for Suzanne Goodwin for Festival Nightmare",
        "Best Director for Nikki Roberts for Festival Nightmare",
      ],
    },
    {
      year: "2014",
      association: "Cornwall Drama Association",
      include: [
        "Best Actress - Suzanne Goodwin for Festival Nightmare",
        "Best Director - Nikki Roberts for Festival Nightmare",
      ],
      special: "Special Awards:",
      sp_include: [
        "Special Award for Carrie Thresher in There Goes the Bride",
        "Special Award for the Giant in Jack and the Beakstalk",
      ],
      secAssociation: "All England 1 Act Play",
      noda_include: [
        "Best Actor - Tim Gerrish for Alternative Accommodation",
        "Best Director for Nikki Roberts for Festival Nightmare",
      ],
      dark: true,
    },
    {
      year: "2013",
      association: "Cornwall Drama Association",
      include: [
        "Best Musical for Oliver!",
        "Best Director - Paul Blaber for Oliver!",
        "Best Actress for Karenza Taylor for Oliver!",
        "Technical Excellence for Cinderella",
      ],
      special: "",
      sp_include: [],
      secAssociation: "All England 1 Act Play",
      noda_include: ["Best Actor - Mike Cox for Between Mouthfulls"],
      
    },
  ];

  return (
    <>
      <Hero
        title="HELSTON THEATRE COMPANY"
        subtitle="CHILD PROTECTION POLICY"
        paragraph="2021-2022"
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
        imageSrc={TheGroupMembers}
        button="Policy Statements"
        linkToPage="#policy-statement"
      />
      <div className="container pt-3  flex justify-end">
        <BackToTheGroup />
      </div>
      <section className="section-global container py-4 md:mt-0" id="awards">
        <H2Heading h2heading="Awards" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start text-base text-center">
          {awards_data.map((e, i) => (
            <div className="w-90 md:w-full mt-4 text-start" key={i}>
              <AwardsCard data={e} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};


const AwardsCard = ({ data }) => {
  return (
    <>
      <div className={"p-3 rounded-2xl hover:scale-105 duration-500  " + (data.dark ? "bg-slate-800" : "bg-slate-800 text-white")}>
        <h5 className="text-3xl text-center color-primary shadow-2xl shadow-indigo-300">{data.year}</h5>
        <p className="text-xl pt-4 pb-2 font-mono text-center underline underline-offset-4 font-bold ">
          {data.association}
        </p>
        {data.include.map((e, i) => (
          <div key={i}>
            <i className="fa-solid fa-trophy pe-2 text-prima"></i>
            {` ${e}`}
          </div>
        ))}
        <p className="text-lg text-center underline underline-offset-2 font-bold py-2">{data.special}</p>
        {data.sp_include &&
          data.sp_include.map((e, i) => (
            <div key={i} >
              <i className="fa-solid fa-award pe-2 "></i>
              {` ${e}`}
            </div>
          ))}

        <p className="text-xl font-mono pt-4 pb-2 text-center underline underline-offset-4 font-bold ">
          {data.secAssociation}
        </p>
        {data.noda_include &&
          data.noda_include.map((e, i) => (
            <div key={i} >
              <i className="fa-solid fa-trophy pe-2 color-primary"></i>
              {` ${e}`}
            </div>
          ))}
      </div>
    </>
  );
};

Awards.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};


export default Awards;

