//The below page is the home page of the website, where information about the website is displayed

import Card from "@/components/home/card";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  //route the user to /demo.tsx if they are logged in
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/demo2");
  }

  return (
    <div className="z-10 text-black">
      <h1 className="font-display  z-20 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold  drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
        Welcome to Vendor Repository
      </h1>
      <p className="z-20 mx-8 my-12 text-center text-2xl font-bold">
        This web application provides you with a centralised storage of all
        information regarding your vendors
      </p>
      <div className="z-20 mx-8 text-center text-2xl font-semibold italic">
        <p>
          This page provides you a demo app for using vercel postgress and
          prisma
        </p>
        <p>SignIn to get Started</p>
      </div>
    </div>
  );
}
