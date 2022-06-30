import Link from "next/link";

function BackToTheGroup() {
  return (
    <>
      <p className="text-lg p-1 rounded-l-lg text-white">
        <Link href="/about">
          <a>
            
            <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>Back to The Group
          </a>
        </Link>
      </p>
    </>
  );
}

export default BackToTheGroup;
