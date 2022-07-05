import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-brand-gradient">
      <footer className="flex flex-wrap justify-around items-center py-3 ">
        <div className="flex items-center justify-between my-2">
          <Link href="/">
            <div className="w-16">
              <Image
                src="/htclogo1.svg"
                width={400}
                height={403}
                alt="Helston Theatre Company Logo"
                className="rounded-full"
              />
            </div>
          </Link>
          <span className="ml-3  text-white">
            &copy; 2022 Helston Theatre Company
          </span>
        </div>

        <ul className="flex">
          <li className="ml-3">
            <a
              href="https://twitter.com/helstontheatre"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/twitter.svg"
                width={36}
                height={36}
                layout="intrinsic"
                alt="Twitter"
              />
            </a>
          </li>
          <li className="ml-3">
            <a
              href="https://www.instagram.com/helstontheatrecompany/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/instagram.svg"
                width={36}
                height={36}
                layout="intrinsic"
                alt="Instagram"
              />
            </a>
          </li>
          <li className="ml-3">
            <a
              href="https://www.facebook.com/HelstonTheatreCompany/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/facebook.svg"
                width={36}
                height={36}
                layout="intrinsic"
                alt="Facebook"
              />
            </a>
          </li>
          <li className="ml-3">
            <a
              href="https://www.youtube.com/user/HTCHelston"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/youtube.svg"
                width={36}
                height={36}
                layout="intrinsic"
                alt="YouTube"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
