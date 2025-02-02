import Link from "next/link";
import Image from "next/image";

export default function not_found() {
  return (
    <div className="text-center mt-16 justify-center">
      {/* <h2 className="text-6xl font-semibold p-5">Not Found 😒</h2>
      <p className="text-gray-500 text-xl">Could not find requested resource</p> */}
      <div className="border justify-center flex">
        <Image
          alt="Page not found"

          src="/images/not-found/not.png"
          width={400}
          height={100}
        />
      </div>
      <p className=" mb-5">oops! The Page you requested was not found!</p>

      <Link href="/home" className="text-blue-700 text-lg hover:underline mt-5">
        Return Home 😀
      </Link>
    </div>
  );
}
