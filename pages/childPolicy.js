import Layout from "../components/layout";
import Hero from "../components/hero";
import TheGroupMembers from "/public/About-htc-members.webp";
import BackToTheGroup from "../components/utilities/backToTheGroupButton";
import H2Heading from "../components/utilities/h2Heading";
import ToggleButton from "../components/utilities/readMoreLessButton";



function SafeChild() {
  return (
    <>
      <Hero
        title="HELSTON THEATRE COMPANY"
        subtitle="CHILD PROTECTION"
        paragraph="2021-2022"
        backgroundImage='url("https://images.unsplash.com/photo-1471877325906-aee7c2240b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")'
        imageSrc={TheGroupMembers}
        button="Policy Statements"
        linkToPage="#policy-statement"
      />
      <div className="container py-3 flex justify-end">
        <BackToTheGroup />
      </div>
      <div className="py-3">
        <H2Heading h2heading="Child Protection Policy" />
      </div>
      <div className="container bg-white text-black pt-6 pb-5 mb-2 rounded-2xl">
        <div className="p-4">
          <h4
            className="text-base md:text-xl font-semibold text-center pb-3"
            id="policy-statement"
          >
            HELSTON THEATRE COMPANY CHILD PROTECTION POLICY 2021-2022
          </h4>
          <p className="pb-3">
            Helston Theatre Company (in this document referred to as the
            society) recognises its duty of care under the Children and Young
            Persons Act 1963, the Child Performances) Regulations 1968, the
            Protection of Children Act 1999 and the Criminal Justice and Court
            Services Act 2000 (in Scotland change to Protection of Children
            (Scotland) Act 2003).
          </p>
          <p className="pb-3">
            The society recognises that abuse can take many forms, whether it be
            physical abuse, emotional abuse, sexual abuse or neglect. The
            society is committed to practice which protects children from harm.
            All members of the society accept and recognise their
            responsibilities to develop awareness of the issues which cause
            children harm.
          </p>
          <div className="pb-3">
            <p className="pb-3 font-bold">The society believes that:</p>
            <ul className="list-disc ml-5 pb-3">
              <li>The welfare of the child is paramount.</li>
              <li>
                All children, whatever their age, culture, disability, gender,
                language, racial origin, religious beliefs and/or sexual
                identity have the right to protection from abuse.
              </li>
              <li>
                All suspicions and allegations of abuse should be taken
                seriously and responded to swiftly and appropriately.
              </li>
              <li>
                All members and employees of the society should be clear on how
                to respond appropriately.
              </li>
            </ul>
          </div>
          <div className="pb-3">
            <p className="pb-3 font-bold">The society will ensure that:</p>
            <ul className="list-disc ml-5 pb-3">
              <li>
                All children will be treated equally and with respect and
                dignity.
              </li>
              <li>The duty of care to children will always be put first.</li>
              <li>
                A balanced relationship based on mutual trust will be built
                which empowers the children to share in the decision making
                process.
              </li>
              <li>
                Enthusiastic and constructive feedback will be given rather than
                negative criticism.
              </li>
              <li>Bullying will not be accepted or condoned.</li>
              <li>
                All adult members of the society provide a positive role model
                for dealing with other people.
              </li>
              <li>
                Action will be taken to stop any inappropriate verbal or
                physical behaviour.
              </li>
              <li>It will keep up-to-date with health & safety legislation.</li>
              <li>
                It will keep informed of changes in legislation and policies for
                the protection of children.
              </li>
              <li>It will undertake relevant development and training.</li>
              <li>
                It will hold a register of every child involved with the society
                and will retain a contact name and number close at hand in case
                of emergencies.
              </li>
            </ul>
          </div>
          <p className="pb-3">
            The society has child protection procedures which accompany this
            policy.{" "}
          </p>
          <p className="pb-3">
            The society has a dedicated Child Protection Officer, who is in
            charge of ensuring that the child protection policy and procedures
            are adhered to. That person’s name is Sophie Greenaway who can be
            contacted on 07799 601800.
          </p>
          <p className="pb-3">
            This policy will be regularly monitored by the Committee of the
            society and will be subject to annual review in the weeks before
            each AGM.{" "}
          </p>
        </div>
        <div className="mx-auto">
          <details
            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg shadow-none" 
          >
            <summary className="text-2xl text-prima font-bold text-center py-2 rounded bg-neutral-50 w-48 mx-auto">
              <ToggleButton />
            </summary>
            <div className="pt-12">
              <p className="pb-3 font-bold">Responsibilities of the Society</p>
              <p className="pb-3">
                At the outset of any production involving children the society
                will:
              </p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  Undertake a risk assessment and monitor risk throughout the
                  production process.
                </li>
                <li>
                  Identify at the outset the person with designated
                  responsibility for child protection.
                </li>
                <li>
                  Engage in effective recruitment of chaperones and other
                  individuals with responsibility for children, including
                  appropriate vetting in consultation with the local education
                  authority.
                </li>
                <li>Ensure that children are supervised at all times.</li>
                <li>
                  Know how to get in touch with the local authority social
                  services, in case it needs to report a concern.
                </li>
              </ul>
              <p className="pb-3 font-bold">Parents</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society believes it to be important that there is a
                  partnership between parents and the society. Parents are
                  encouraged to be involved in the activities of the society and
                  to share responsibility for the care of children. All parents
                  will be given a copy the society’s Child Protection Policy and
                  procedures.
                </li>
                <li>
                  All parents have the responsibility to collect (or arrange
                  collection of) their children after rehearsals or
                  performances. It is NOT the responsibility of the society to
                  take children home. Parents must inform the child protection
                  officer if they give permission for their child to walk home
                  from rehearsals without an adult present.{" "}
                </li>
              </ul>
              <p className="pb-3 font-bold">Unsupervised Contact</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society will attempt to ensure that no adult has
                  unsupervised contact with children.{" "}
                </li>
                <li>
                  If possible there will always be two adults in the room when
                  working with children.
                </li>
                <li>
                  If unsupervised contact is unavoidable, steps will be taken to
                  minimise risk. For example, work will be carried out in a
                  public area, or in a designated room with a door open.
                </li>
                <li>
                  If it is predicted that an individual is likely to require
                  unsupervised contact with children, it is preferred that they
                  are a Licensed Chaperone.{" "}
                </li>
              </ul>
              <p className="pb-3 font-bold">Physical Contact</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  All adults will maintain a safe and appropriate distance from
                  children
                </li>
                <li>
                  Adults will only touch children when it is absolutely
                  necessary in relation to the particular activity.
                </li>
                <li>
                  Adults will seek the consent of the child prior to any
                  physical contact and the purpose of the contact shall be made
                  clear.
                </li>
              </ul>
              <p className="pb-3 font-bold">Managing sensitive information</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society has a policy and procedures for the taking, using
                  and storage of photographs or images of children.
                </li>
                <li>
                  Permission will be sought from the parents for use of
                  photographic material featuring children for promotional or
                  other purposes.
                </li>
                <li>
                  The society’s web-based materials and activities will be
                  carefully monitored for inappropriate use.
                </li>
                <li>
                  The society will ensure confidentiality in order to protect
                  the rights of its members, including the safe handling,
                  storage and disposal of any sensitive information such as
                  criminal record disclosures.
                </li>
                <li>
                  The society will adhere to laws surrounding GDPR and will hold
                  all personal details on children and their families in
                  password protected files. Only those chaperoning the children,
                  the director of a show and the child protection officer will
                  have access to this information.{" "}
                </li>
              </ul>
              <p className="pb-3 font-bold">Suspicion of abuse</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  If you see or suspect abuse of a child while in the care of
                  the society, please make this known to the person with
                  responsibility for child protection. If you suspect that the
                  person with responsibility for child protection is the source
                  of the problem, you should make your concerns known to the
                  Chairman.
                </li>
                <li>
                  Please make a note for your own records of what you witnessed
                  as well as your response, in case there is follow-up in which
                  you are involved.
                </li>
                <li>
                  If a serious allegation is made against any member of the
                  society, chaperone, venue staff etc., that individual will be
                  suspended immediately until the investigation is concluded.
                  The individual will be excluded from the theatre, rehearsal
                  rooms etc. and will not have any unsupervised contact with any
                  other children in the production.
                </li>
              </ul>
              <p className="pb-3 font-bold">Disclosure of abuse</p>
              If a child confides in you that abuse has taken place:
              <ul className="list-disc ml-5 pb-3">
                <li>
                  Remain calm and in control but do not delay taking action.
                </li>
                <li>
                  Listen carefully to what has been said. Allow the child to
                  tell you at their own pace and ask questions only for
                  clarification. Don’t ask questions that suggest a particular
                  answer.
                </li>
                <li>
                  Don’t promise to keep it a secret. Use the first opportunity
                  you have to share the information with the person with
                  responsibility for child protection. Make it clear to the
                  child that you will need to share this information with
                  others. Make it clear that you will only tell the people who
                  need to know and who should be able to help.
                </li>
                <li>
                  Reassure the child that ‘they did the right thing’ in telling
                  someone.
                </li>
                <li>Tell the child what you are going to do next.</li>
                <li>
                  Speak immediately to the person with responsibility for child
                  protection. It is that person’s responsibility to liaise with
                  the relevant authorities, usually social services or the
                  police.
                </li>
                <li>
                  As soon as possible after the disclosing conversation, make a
                  note of what was said, using the child’s own words. Note the
                  date, time, any names that were involved or mentioned, and who
                  you gave the information to. Make sure you sign and date your
                  record.
                </li>
              </ul>
              <p className="pb-3 font-bold">Recording</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  In all situations, including those in which the cause of
                  concern arises from a disclosure made in confidence, the
                  details of an allegation or reported incident will be
                  recorded, regardless of whether or not the concerns have been
                  shared with a statutory child protection agency.
                </li>
                <li>
                  An accurate note shall be made of the date and time of the
                  incident or disclosure, the parties involved, what was said or
                  done and by whom, any action taken to investigate the matter,
                  any further action taken eg. suspension of an individual,
                  where relevant the reasons why the matter was not referred to
                  a statutory agency, and the name of the persons reporting and
                  to whom it was reported.
                </li>
                <li>
                  The record will be stored securely and shared only with those
                  who need to know about the incident or allegation.
                </li>
              </ul>
              <p className="pb-3 font-bold">Rights & Confidentiality</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  If a complaint is made against a member of the society, he or
                  she will be made aware of his rights under the society’s
                  disciplinary procedures.
                </li>
                <li>
                  No matter how you may feel about the accusation, both the
                  alleged abuser and the child who is thought to have been
                  abused have the right to confidentiality under the Data
                  Protection Act 1998. Remember also that any possible criminal
                  investigation could be compromised through inappropriate
                  information being released.
                </li>
                <li>
                  In criminal law the Crown, or other prosecuting authority, has
                  to prove guilt and the defendant is presumed innocent until
                  proven guilty.
                </li>
              </ul>
              <p className="pb-3 font-bold">Accidents</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  To avoid accidents, chaperones and children will be advised of
                  “house rules” regarding health and safety and will be notified
                  of areas that are out of bounds. Children will be advised of
                  the clothing and footwear appropriate to the work that will be
                  undertaken.
                </li>
                <li>
                  If a child is injured while in the care of the society, a
                  designated first-aider will administer first aid and the
                  injury will be recorded in the society’s accident book. This
                  record will be countersigned by the person with responsibility
                  for child protection.{" "}
                </li>
                <li>
                  If a child joins the production with an obvious physical
                  injury a record of this will be made in the accident book.
                  This record will be countersigned by the person with
                  responsibility for child protection. This record can be useful
                  if a formal allegation is made later and will also be a record
                  that the child did not sustain the injury while participating
                  in the production.
                </li>
              </ul>
              <p className="pb-3 font-bold">
                DBS checks (Disclosure and Barring Service){" "}
              </p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society believes it is in its best interests to obtain a
                  DBS check for all chaperones or other selected personnel.{" "}
                </li>
                <li>
                  The society will have a written code of practice for the
                  handling of disclosure information.
                </li>
                <li>
                  The society will ensure that information contained in the
                  disclosure is not misused.
                </li>
              </ul>
              <p className="pb-3 font-bold">Chaperones</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  Chaperones will be appointed by the society for the care of
                  children during the production process. By law the chaperone
                  is acting in loco parentis and should exercise the care which
                  a good parent might be reasonably expected to give to a child.
                  The maximum number of children in the chaperone’s care shall
                  not exceed 12.
                </li>
                <li>
                  Potential chaperones will be required to be Licensed by
                  Cornwall Council and will be need to supply photographic proof
                  of identity (eg. passport, driving licence) and two references
                  from individuals with knowledge of their previous work with
                  children.{" "}
                </li>
                <li>
                  Chaperones will be made aware of the society’s Child
                  Protection Policy and Procedures.
                </li>
                <li>
                  Chaperones will not usually have unsupervised access to
                  children in their care. If unsupervised access is unavoidable,
                  or if this is a requirement of the local authority, a DBS
                  check will be sought.
                </li>
                <li>
                  Where chaperones are not satisfied with the conditions for the
                  children, they should bring this to the attention of the
                  Director or Chairman. If changes cannot be made
                  satisfactorily, the chaperone should consider not allowing the
                  child to continue.
                </li>
                <li>
                  If a chaperone considers that a child is unwell or too tired
                  to continue, the chaperone must inform the Director and not
                  allow the child to continue.
                </li>
                <li>
                  Under the Dangerous Performances Act, no child of compulsory
                  school age is permitted to do anything which may endanger life
                  or limb. This could include working on wires or heavy lifting.
                  Chaperones should tell the Director to cease using children in
                  this way and should contact the local authority.
                </li>
                <li>
                  During performances, chaperones will be responsible for
                  meeting children at the stage door and signing them into the
                  building.
                </li>
                <li>
                  When appropriate children will be kept together at all times
                  but this will depend upon the structure of the rehearsal
                  and/or performances and except when using separate dressing
                  rooms.
                </li>
                <li>
                  Chaperones will be aware of where the children are at all
                  times.
                </li>
                <li>
                  Children are not to leave the theatre unsupervised by
                  chaperones unless in the company of their parents.
                </li>
                <li>
                  Children will be adequately supervised while going to and from
                  the toilets.
                </li>
                <li>
                  Children will not be allowed to enter the adult dressing
                  rooms.
                </li>
                <li>
                  Chaperones should be aware of the safety arrangements and
                  first aid procedures in the venue, and will ensure that
                  children in their care do not place themselves and others in
                  danger.
                </li>
                <li>
                  Chaperones should ensure that any accidents are reported to
                  and recorded by the society.
                </li>
                <li>
                  Chaperones should examine accident books each day. If an
                  accident has occurred, the producer is not allowed to use that
                  child until a medically qualified opinion has been obtained
                  (not just the word of the parent or child).
                </li>
                <li>
                  Chaperones should have written arrangements for children after
                  performances. If someone different is to collect the child, a
                  telephone call should be made to the parent to confirm the
                  arrangements.
                </li>
                <li>
                  Children should be signed out when leaving and a record made
                  of the person collecting.
                </li>
                <li>
                  If a parent has not collected the child, it is the duty of the
                  chaperone to stay with that child or make arrangements to take
                  them home.
                </li>
              </ul>
            </div>
          </details>
        </div>
        {/* <Accordion flush>
          <Accordion.Item eventKey="0">
            <div className="w-48 mx-auto">
              <AccordionButton className="text-xl text-prima font-bold text-center py-2 rounded bg-neutral-50">
                Read More
              </AccordionButton>
            </div>

            <Accordion.Body className="container py-3 p-4">
              <p className="pb-3 font-bold">Responsibilities of the Society</p>
              <p className="pb-3">
                At the outset of any production involving children the society
                will:
              </p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  Undertake a risk assessment and monitor risk throughout the
                  production process.
                </li>
                <li>
                  Identify at the outset the person with designated
                  responsibility for child protection.
                </li>
                <li>
                  Engage in effective recruitment of chaperones and other
                  individuals with responsibility for children, including
                  appropriate vetting in consultation with the local education
                  authority.
                </li>
                <li>Ensure that children are supervised at all times.</li>
                <li>
                  Know how to get in touch with the local authority social
                  services, in case it needs to report a concern.
                </li>
              </ul>
              <p className="pb-3 font-bold">Parents</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society believes it to be important that there is a
                  partnership between parents and the society. Parents are
                  encouraged to be involved in the activities of the society and
                  to share responsibility for the care of children. All parents
                  will be given a copy the society’s Child Protection Policy and
                  procedures.
                </li>
                <li>
                  All parents have the responsibility to collect (or arrange
                  collection of) their children after rehearsals or
                  performances. It is NOT the responsibility of the society to
                  take children home. Parents must inform the child protection
                  officer if they give permission for their child to walk home
                  from rehearsals without an adult present.{" "}
                </li>
              </ul>
              <p className="pb-3 font-bold">Unsupervised Contact</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society will attempt to ensure that no adult has
                  unsupervised contact with children.{" "}
                </li>
                <li>
                  If possible there will always be two adults in the room when
                  working with children.
                </li>
                <li>
                  If unsupervised contact is unavoidable, steps will be taken to
                  minimise risk. For example, work will be carried out in a
                  public area, or in a designated room with a door open.
                </li>
                <li>
                  If it is predicted that an individual is likely to require
                  unsupervised contact with children, it is preferred that they
                  are a Licensed Chaperone.{" "}
                </li>
              </ul>
              <p className="pb-3 font-bold">Physical Contact</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  All adults will maintain a safe and appropriate distance from
                  children
                </li>
                <li>
                  Adults will only touch children when it is absolutely
                  necessary in relation to the particular activity.
                </li>
                <li>
                  Adults will seek the consent of the child prior to any
                  physical contact and the purpose of the contact shall be made
                  clear.
                </li>
              </ul>
              <p className="pb-3 font-bold">Managing sensitive information</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society has a policy and procedures for the taking, using
                  and storage of photographs or images of children.
                </li>
                <li>
                  Permission will be sought from the parents for use of
                  photographic material featuring children for promotional or
                  other purposes.
                </li>
                <li>
                  The society’s web-based materials and activities will be
                  carefully monitored for inappropriate use.
                </li>
                <li>
                  The society will ensure confidentiality in order to protect
                  the rights of its members, including the safe handling,
                  storage and disposal of any sensitive information such as
                  criminal record disclosures.
                </li>
                <li>
                  The society will adhere to laws surrounding GDPR and will hold
                  all personal details on children and their families in
                  password protected files. Only those chaperoning the children,
                  the director of a show and the child protection officer will
                  have access to this information.{" "}
                </li>
              </ul>
              <p className="pb-3 font-bold">Suspicion of abuse</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  If you see or suspect abuse of a child while in the care of
                  the society, please make this known to the person with
                  responsibility for child protection. If you suspect that the
                  person with responsibility for child protection is the source
                  of the problem, you should make your concerns known to the
                  Chairman.
                </li>
                <li>
                  Please make a note for your own records of what you witnessed
                  as well as your response, in case there is follow-up in which
                  you are involved.
                </li>
                <li>
                  If a serious allegation is made against any member of the
                  society, chaperone, venue staff etc., that individual will be
                  suspended immediately until the investigation is concluded.
                  The individual will be excluded from the theatre, rehearsal
                  rooms etc. and will not have any unsupervised contact with any
                  other children in the production.
                </li>
              </ul>
              <p className="pb-3 font-bold">Disclosure of abuse</p>
              If a child confides in you that abuse has taken place:
              <ul className="list-disc ml-5 pb-3">
                <li>
                  Remain calm and in control but do not delay taking action.
                </li>
                <li>
                  Listen carefully to what has been said. Allow the child to
                  tell you at their own pace and ask questions only for
                  clarification. Don’t ask questions that suggest a particular
                  answer.
                </li>
                <li>
                  Don’t promise to keep it a secret. Use the first opportunity
                  you have to share the information with the person with
                  responsibility for child protection. Make it clear to the
                  child that you will need to share this information with
                  others. Make it clear that you will only tell the people who
                  need to know and who should be able to help.
                </li>
                <li>
                  Reassure the child that ‘they did the right thing’ in telling
                  someone.
                </li>
                <li>Tell the child what you are going to do next.</li>
                <li>
                  Speak immediately to the person with responsibility for child
                  protection. It is that person’s responsibility to liaise with
                  the relevant authorities, usually social services or the
                  police.
                </li>
                <li>
                  As soon as possible after the disclosing conversation, make a
                  note of what was said, using the child’s own words. Note the
                  date, time, any names that were involved or mentioned, and who
                  you gave the information to. Make sure you sign and date your
                  record.
                </li>
              </ul>
              <p className="pb-3 font-bold">Recording</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  In all situations, including those in which the cause of
                  concern arises from a disclosure made in confidence, the
                  details of an allegation or reported incident will be
                  recorded, regardless of whether or not the concerns have been
                  shared with a statutory child protection agency.
                </li>
                <li>
                  An accurate note shall be made of the date and time of the
                  incident or disclosure, the parties involved, what was said or
                  done and by whom, any action taken to investigate the matter,
                  any further action taken eg. suspension of an individual,
                  where relevant the reasons why the matter was not referred to
                  a statutory agency, and the name of the persons reporting and
                  to whom it was reported.
                </li>
                <li>
                  The record will be stored securely and shared only with those
                  who need to know about the incident or allegation.
                </li>
              </ul>
              <p className="pb-3 font-bold">Rights & Confidentiality</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  If a complaint is made against a member of the society, he or
                  she will be made aware of his rights under the society’s
                  disciplinary procedures.
                </li>
                <li>
                  No matter how you may feel about the accusation, both the
                  alleged abuser and the child who is thought to have been
                  abused have the right to confidentiality under the Data
                  Protection Act 1998. Remember also that any possible criminal
                  investigation could be compromised through inappropriate
                  information being released.
                </li>
                <li>
                  In criminal law the Crown, or other prosecuting authority, has
                  to prove guilt and the defendant is presumed innocent until
                  proven guilty.
                </li>
              </ul>
              <p className="pb-3 font-bold">Accidents</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  To avoid accidents, chaperones and children will be advised of
                  “house rules” regarding health and safety and will be notified
                  of areas that are out of bounds. Children will be advised of
                  the clothing and footwear appropriate to the work that will be
                  undertaken.
                </li>
                <li>
                  If a child is injured while in the care of the society, a
                  designated first-aider will administer first aid and the
                  injury will be recorded in the society’s accident book. This
                  record will be countersigned by the person with responsibility
                  for child protection.{" "}
                </li>
                <li>
                  If a child joins the production with an obvious physical
                  injury a record of this will be made in the accident book.
                  This record will be countersigned by the person with
                  responsibility for child protection. This record can be useful
                  if a formal allegation is made later and will also be a record
                  that the child did not sustain the injury while participating
                  in the production.
                </li>
              </ul>
              <p className="pb-3 font-bold">
                DBS checks (Disclosure and Barring Service){" "}
              </p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  The society believes it is in its best interests to obtain a
                  DBS check for all chaperones or other selected personnel.{" "}
                </li>
                <li>
                  The society will have a written code of practice for the
                  handling of disclosure information.
                </li>
                <li>
                  The society will ensure that information contained in the
                  disclosure is not misused.
                </li>
              </ul>
              <p className="pb-3 font-bold">Chaperones</p>
              <ul className="list-disc ml-5 pb-3">
                <li>
                  Chaperones will be appointed by the society for the care of
                  children during the production process. By law the chaperone
                  is acting in loco parentis and should exercise the care which
                  a good parent might be reasonably expected to give to a child.
                  The maximum number of children in the chaperone’s care shall
                  not exceed 12.
                </li>
                <li>
                  Potential chaperones will be required to be Licensed by
                  Cornwall Council and will be need to supply photographic proof
                  of identity (eg. passport, driving licence) and two references
                  from individuals with knowledge of their previous work with
                  children.{" "}
                </li>
                <li>
                  Chaperones will be made aware of the society’s Child
                  Protection Policy and Procedures.
                </li>
                <li>
                  Chaperones will not usually have unsupervised access to
                  children in their care. If unsupervised access is unavoidable,
                  or if this is a requirement of the local authority, a DBS
                  check will be sought.
                </li>
                <li>
                  Where chaperones are not satisfied with the conditions for the
                  children, they should bring this to the attention of the
                  Director or Chairman. If changes cannot be made
                  satisfactorily, the chaperone should consider not allowing the
                  child to continue.
                </li>
                <li>
                  If a chaperone considers that a child is unwell or too tired
                  to continue, the chaperone must inform the Director and not
                  allow the child to continue.
                </li>
                <li>
                  Under the Dangerous Performances Act, no child of compulsory
                  school age is permitted to do anything which may endanger life
                  or limb. This could include working on wires or heavy lifting.
                  Chaperones should tell the Director to cease using children in
                  this way and should contact the local authority.
                </li>
                <li>
                  During performances, chaperones will be responsible for
                  meeting children at the stage door and signing them into the
                  building.
                </li>
                <li>
                  When appropriate children will be kept together at all times
                  but this will depend upon the structure of the rehearsal
                  and/or performances and except when using separate dressing
                  rooms.
                </li>
                <li>
                  Chaperones will be aware of where the children are at all
                  times.
                </li>
                <li>
                  Children are not to leave the theatre unsupervised by
                  chaperones unless in the company of their parents.
                </li>
                <li>
                  Children will be adequately supervised while going to and from
                  the toilets.
                </li>
                <li>
                  Children will not be allowed to enter the adult dressing
                  rooms.
                </li>
                <li>
                  Chaperones should be aware of the safety arrangements and
                  first aid procedures in the venue, and will ensure that
                  children in their care do not place themselves and others in
                  danger.
                </li>
                <li>
                  Chaperones should ensure that any accidents are reported to
                  and recorded by the society.
                </li>
                <li>
                  Chaperones should examine accident books each day. If an
                  accident has occurred, the producer is not allowed to use that
                  child until a medically qualified opinion has been obtained
                  (not just the word of the parent or child).
                </li>
                <li>
                  Chaperones should have written arrangements for children after
                  performances. If someone different is to collect the child, a
                  telephone call should be made to the parent to confirm the
                  arrangements.
                </li>
                <li>
                  Children should be signed out when leaving and a record made
                  of the person collecting.
                </li>
                <li>
                  If a parent has not collected the child, it is the duty of the
                  chaperone to stay with that child or make arrangements to take
                  them home.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      </div>
    </>
  );
}

SafeChild.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default SafeChild;
