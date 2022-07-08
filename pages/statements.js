// import Layout from '../components/layout';
import Image from 'next/image'
import Link from 'next/link';
// import Hero from '../components/hero';
// import BackToTheGroup from '../components/utilities/backToTheGroupButton';
import H2Heading from '../components/utilities/h2Heading';
import TextCard from '../components/utilities/textCard';
// import TheGroupMembers from "/public/About-htc-members.webp";
import rehearsals from "/public/rehearsals.jpeg";

function MissionStatementSection() {
  return (
    <>
      <section className="section-global container" id="mission">
        <H2Heading h2heading="Mission Statement" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20 px-2">
          <TextCard
            text={`Our mission is to provide opportunities for people to collectively appreciate and develop their talents, skills, knowledge and
              expertise in live performance. In support of our mission we aim to present a diverse range of productions of high standards for our audiences and members participation and enjoyment.`}
          />
          <div className="flex-auto md:w-75 mx-auto md:w-full pt-12 ">
            <Image
              src={rehearsals}
              width={960}
              height={960}
              className="rounded-lg"
              alt="Jamaica Inn at Trebah Gardens"
            />
          </div>
        </div>

        <div className="columns-1 px-2 md:px-40">
          <div>
            <p className="text-2xl mt-5">To achieve our aim we:</p>

            <ul className="mt-5 text-lg">
              <li className="mb-3 text-justify">
                <i className="fa-solid fa-bars-staggered text-prima pr-4"></i>
                Select activities and productions which will provide interest,
                challenge, entertainment and rewards for our participants and
                audiences;
              </li>
              <li className="mb-3 text-justify">
                <i className="fa-solid fa-bars-staggered text-prima pr-4"></i>
                are inclusive and welcoming; providing support and encouragement
                to our diverse membership;
              </li>
              <li className="mb-3 text-justify">
                <i className="fa-solid fa-bars-staggered text-prima pr-4"></i>
                provide leadership, structures, procedures and financial probity
                to ensure the continuity of our company;
              </li>
              <li className="mb-3 text-justify">
                <i className="fa-solid fa-bars-staggered text-prima pr-4"></i>
                recognise the ability to contribute is not evenly distributed
                but will be clear about minimum expectations to ensure
                collective pride in our achievements;
              </li>
              <li className="mb-3 text-justify">
                <i className="fa-solid fa-bars-staggered text-prima pr-4"></i>
                encourage participation from, and presentation to, the widest
                possible cross-section of our community;
              </li>
              <li className="mb-3 text-justify">
                <i className="fa-solid fa-bars-staggered text-prima pr-4"></i>
                recognise and value equally the needs and contribution of
                performers, crew and audiences
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-global container" id="mission">
        <div
          className=" py-12 columns-1 text-center"
          id="child-policy"
        >
          <H2Heading h2heading="Child Protection Policy" />
          <Link href="/childPolicy">
            <button className="btn-brand  ">
              Read here
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}


// MissionStatementSection.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default MissionStatementSection;