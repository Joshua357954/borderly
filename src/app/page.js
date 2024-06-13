"use client";
import Image from "next/image";
import { FaRegCompass as Compass, FaCaretDown } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { useState } from "react";
import firebase from "@/config/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function Home() {
  const [activeTab, setActiveTab] = useState("Users");

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user.displayName);
      // Optionally, you can perform additional actions after successful sign-in
    } catch (error) {
      console.error("Error signing in with Google:", error);
      // toast.error("Failed to sign in with Google.");
    }
  };


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

      <section className="w-full flex justify-center">
        <div className="bg-yellow-400 px-2 py-4 w-[40%] h-[200px] flex flex-col items-center gap-5">
          <div className="flex bg-gray-100 rounded-sm w-fit mx-auto p-2">
            <button
              className={`text-center border-r-2 px-4 py-3 ${
                activeTab === "Users" ? "bg-white" : ""
              }`}
              onClick={() => setActiveTab("Users")}
            >
              Users
            </button>
            <button
              className={`text-center border-l-2 px-4 py-3 ${
                activeTab === "Companies" ? "bg-white" : ""
              }`}
              onClick={() => setActiveTab("Companies")}
            >
              Companies
            </button>
          </div>

          <button
            className="flex gap-2 bg-black text-white items-center px-10 py-4"
            onClick={handleGoogleSignIn}
          >
            <Image
              src="/google-img.png"
              width="20"
              height="20"
              alt="Google logo"
            />
            SignIn with Google
          </button>
        </div>
      </section>
    </main>
  );
}
