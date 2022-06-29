import Link from "next/link";

function GoBackButton() { 
    return (
      <>
        <p className="text-lg p-1 rounded-l-lg text-white">
          <Link href="/">
            <a>
              <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>
              Back to home
            </a>
          </Link>
        </p>
      </>
    );
}

export default GoBackButton