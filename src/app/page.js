import Image from "next/image";
import { FaRegCompass as Compass, FaCaretDown } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="flex justify-between w-full px-4 bg-blue-000 py-4 items-center">
        <div className="flex gap-2 items-center">
          <Compass className="text-4xl" />{" "}
          <h1 className="text-2xl font-bold"> Borderly</h1>
        </div>

        <ul className="flex items-center gap-x-5">
          <li className="font-bold text-md">Home</li>
          <li className="font-bold text-md">Explore</li>
          <li className="font-bold text-md">Car Rentals</li>
        </ul>

        <div className="flex items-center gap-x-2">
          NG <FaCaretDown />
        </div>
      </nav>

      {/* Body */}

      <header className="py-20 text-center space-y-3 lg:px-75 sm:px-10">
        <h2 className="text-6xl">Simplify Your Travel Experience</h2>
        <p>
          Dive into authentic journeys that highlight our area's rich history
          and beauty
        </p>
        <p>
          Receive tailored tips for activities and sights based on your
          interests and time available, Enjoy straightforward booking and
          planning processes to make your journey stress-free
        </p>

        <div className="flex justify-around p-5 bg-gray-100">
          <div className="text-center">
            <GiPriceTag size={20} className="text-green-500 mb-2" />
            <p className="text-lg font-semibold">Cheap</p>
          </div>
          <div className="text-center">
            <MdVerified size={20} className="text-blue-500 mb-2" />
            <p className="text-lg font-semibold">Reliable</p>
          </div>
          <div className="text-center">
            <FaRocket size={20} className="text-red-500 mb-2" />
            <p className="text-lg font-semibold">Swift</p>
          </div>
        </div>
      </header>

      <section className="w-full bg-red-500 ">
        <div className="bg-yellow-400 w-fit px-2 py-3">
          <div className="flex bg-gray-100 p1 rounded-sm w-fit">
            <button className="text-center border-r-2 border-r-black p-2">Users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            <button className="text-center border-l-2 border-l-black p-2">Compaines</button>
          </div>
        </div>
      </section>
    </main>
  );
}
