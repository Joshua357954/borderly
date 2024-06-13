"use client";
import Image from "next/image";
import { FaRegCompass as Compass, FaCaretDown } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { useState } from "react";
import firebase from "@/config/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center">
          Home of Borderly
    </main>
  );
}
