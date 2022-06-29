import Link from "next/link";

function GoToProductions() {
  return (
    <>
      <p className="text-lg p-1 rounded-l-lg text-white">
        <Link href="/productions">
          <a>
            
            <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>Back to Productions
          </a>
        </Link>
      </p>
    </>
  );
}

export default GoToProductions;
