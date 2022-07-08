//Past productions

import H2Heading from "./utilities/h2Heading";

const ProductionsData = () => {
  const projects_data = [
    {
      category: "2021",
      color: "#5737f5",
      text: "Tell Me On a Sunday",
      link: "https://www.facebook.com/media/set/?vanity=HelstonTheatreCompany&set=a.4240090692742336",
      text2: "James and the Giant Peach",
      link2:
        "https://www.facebook.com/media/set/?vanity=HelstonTheatreCompany&set=a.4240080592743346",
      text3: "Movies 2 Musicals",
      link3: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2020",
      text: "Aladdin",
      color: "	#d70078",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2019",
      color: "#3240af",
      text: "Dick Whittington",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=2042564099161684",
      text2: "Whistle Down the Wind",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=2158469154237844",
      text3: "The Wind in the Willows",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=2352684551482969",
      text4: "9 to 5",
      link4:
        "https://www.facebook.com/DiscoverHelston/photos/?tab=album&album_id=1542779992547182",
    },
    {
      category: "2018",
      color: "#7F57F1",
      text: "Snow White and the Seven Dwarfs",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1585570348194397",
      text2: "Avenue Q",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1671484599602971",
      text3: "Jamaica Inn",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1903220696429359",
      text4: "My Fair Lady",
      link4:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1903220696429359",
    },
    {
      category: "2017",
      color: "#df3393",
      text: "Cinderella",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1234549093296526",
      text2: "RENT",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1327976880620413",
      text3: "Night at the Museum",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1376513982433369",
      text4: "Movies to Musicals",
      link4:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1429900663761367",
      text5: "Oklahoma",
      link5:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=1491086284309471",
    },
    {
      category: "2016",
      color: "#2633a1",
      text: "Aladdin",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Our House",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=993732190711552",
      text3: "The Government Inspector",
      link3: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2015",
      color: "#e766ae",
      text: "Festival Nightmare",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Mother Goose",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=773790942705679",
      text3: "Sunset Boulevard",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=808976719187101",
      text4: "The Hypochondriac",
      link4:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=870838709667568",
    },
    {
      category: "2014",
      color: "#0d0d6d",
      text: "Jack and The Beanstalk",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=586974684720640",
      text2: "Oh What A Lovely War",
      link2:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=728939663857474",
      text3: "There Goes the Bride",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=678230942261680",
      text4: "Alternative Accommodation",
      link4: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text5: "Musical Memories",
      link5: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2013",
      color: "#ef99c9",
      text: "Cinderella",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Oliver!",
      link2: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text3: "When We Are Married",
      link3:
        "https://www.facebook.com/HelstonTheatreCompany/photos/?tab=album&album_id=500574886693954",
      text4: "Between Mouthfulls",
      link4: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
    {
      category: "2012",
      color: "#00003d",
      text: "Dick Whittington",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "David Copperfield",
      link2: "https://www.facebook.com/HelstonTheatreCompany/photos",
    },
    {
      category: "2011",
      color: "#d70078",
      text: "Aladdin",
      link: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text2: "Annie Get Your Gun",
      link2: "https://www.facebook.com/HelstonTheatreCompany/photos/",
      text3: "Fish Out of Water",
      link3: "https://www.facebook.com/HelstonTheatreCompany/photos/",
    },
  ];

  return (
    <>
      <section className="section-global container">
        <h2 className="h2-brand mb-20">
         Past Productions
        </h2>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ProductionCards data={projects_data} />
          </div>
        </div>
      </section>
    </>
  );
};



const ProductionCards = ({ data }) => {
  return (
    <>
      {data.map((e, i) => (
        <div className=" " key={i}>
          <div
            className="h-full rounded-md p-2 flex flex-col "
            style={{ backgroundColor: `${e.color}da` }}
          >
            <div className="text-2xl mb-3 text-center  text-white">
              {e.category}
            </div>
            <a
              href={e.link}
              target="_blank"
              rel="noreferrer"
              className="underline mb-4 font-semibold "
            >
              {e.text}
            </a>
            <a
              href={e.link2}
              target="_blank"
              rel="noreferrer"
              className="underline mb-4 font-semibold"
            >
              {e.text2}
            </a>
            <a
              href={e.link3}
              target="_blank"
              rel="noreferrer"
              className="underline mb-4 font-semibold"
            >
              {e.text3}
            </a>
            <a
              href={e.link4}
              target="_blank"
              rel="noreferrer"
              className="underline mb-4 font-semibold"
            >
              {e.text4}
            </a>
            <a
              href={e.link5}
              target="_blank"
              rel="noreferrer"
              className="underline mb-4 font-semibold"
            >
              {e.text5}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductionsData;
