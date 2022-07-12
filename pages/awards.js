// import Layout from "../components/layout";
// import Hero from "../components/hero";
// import BackToTheGroup from "../components/utilities/backToTheGroupButton";
import H2Heading from "../components/utilities/h2Heading"
// import TheGroupMembers from "/public/About-htc-members.webp";


const Awards = () => {
  const awards_data = [
    {
      year: "2019",
      association: "Cornwall Drama Association",
      include: [
        "Best Set in a Musical for Whistle Down The Wind",
        "Technical Achievement for Whistle Down The Wind",
        "Best Actress in a Musical - Caya Murphy for Whislte Down The Wind",
        "Best Actor in a Musical - Jonathan Tucker for My Fair Lady",
        "Best Pantomime for Dick Whittington ",
      ],
      special: "Special Awards:",
      sp_include: [
        "The Best Steam Train in The Wind in the Willows",
        "Tabitha Lammas as Tabby the Cat in Dick Whittington",
      ],
      secAssociation: "",
      noda_include: [],
    },
    {
      year: "2018",
      association: "Cornwall Drama Association",
      include: [
        "Best Musical for Avenue Q",
        "Best Director - Paul Blaber for Avenue Q",
        "Fine Ensemble Playing for Avenue Q",
        "Best Actor in a Musical - Trenton Spear & Russel Hicken for Avenue Q",
        "Best Actress in a Musical - Grace Wallen for Avenue Q",
      ],
      special: "Special Awards:",
      sp_include: [
        "Gary Hunt for the Dame in Snow White and the Seven Dwarfes",
        "The Dwarfes in Snow White and the Seven Dwarfes",
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
      secAssociation: "National Operatic and Dramatic Association",
      noda_include: ["District 1 Award for Rent"],
    },
    {
      year: "2016",
      association: "Cornwall Drama Association",
      include: [
        "Best Musical for Our House",
        "Best Actor - Nathan Hooper for Our House",
        "Outstanding Musical Performance for Our House",
        "Fine Ensemble Playing for Our House",
      ],
      special: "",
      sp_include: [],
      secAssociation: "",
      noda_include: [],
      dark: true,
    },
    {
      year: "2015",
      association: "Cornwall Drama Association",
      include: [
        "Best Director - Leslie Church for The Hypochondriac",
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
      secAssociation: "National Operatic and Dramatic Association",
      noda_include: [
        "District 1 Award for Sunset Boulevard",
      ],
    },
    {
      year: "2014",
      association: "Cornwall Drama Association",
      include: [
      ],
      special: "Special Awards:",
      sp_include: [
        "Special Award for Carrie Thresher in There Goes the Bride",
        "Special Award for the Giant in Jack and the Beakstalk",
      ],
      secAssociation: "All England 1 Act Play",
      noda_include: [
        "Best Actor - Tim Gerrish for Alternative Accommodation",
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
      <section className="section-global container py-8">
        <H2Heading h2heading="Awards" />
        <div className="items-start text-base text-center pt-10">
          {awards_data.map((e, i) => (
            <div className="w-full md:w-3/4 mx-auto mt-4 text-start" key={i}>
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
      <div className={"p-3 rounded-2xl hover:scale-105 duration-500 " + (data.dark ? "bg-slate-800" : "bg-slate-800 text-white")}>
        <h5 className="text-3xl text-center color-primary shadow-2xl shadow-indigo-300">{data.year}</h5>
        <p className="text-xl pt-4 pb-2 font-mono text-center underline underline-offset-4 font-bold ">
          {data.association}
        </p>
        {data.include.map((e, i) => (
          <div key={i}>
            <i className="fa-solid fa-trophy pr-2 text-prima"></i>
            {` ${e}`}
          </div>
        ))}
        <p className="text-lg text-center underline underline-offset-2 font-bold py-2">{data.special}</p>
        {data.sp_include &&
          data.sp_include.map((e, i) => (
            <div key={i} >
              <i className="fa-solid fa-award pr-2 "></i>
              {` ${e}`}
            </div>
          ))}

        <p className="text-xl font-mono pt-4 pb-2 text-center underline underline-offset-4 font-bold ">
          {data.secAssociation}
        </p>
        {data.noda_include &&
          data.noda_include.map((e, i) => (
            <div key={i} >
              <i className="fa-solid fa-trophy pr-2 text-prima"></i>
              {` ${e}`}
            </div>
          ))}
      </div>
    </>
  );
};

// Awards.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   );
// };


export default Awards;

