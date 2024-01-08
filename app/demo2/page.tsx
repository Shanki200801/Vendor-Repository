import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DemoPage from "./pagee";
import { env } from "process";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  console.log(`${env.NEXT_PUBLIC_NEXTAPP_URL}/api/getvendors`);
  const fetchData = async () => {
    const data = await fetch(`${env.NEXT_PUBLIC_NEXTAPP_URL}/api/getvendors`, {
      method: "GET",
      headers: {},
    });
    return data.json();
  };
  const initialData = await fetchData();

  return <DemoPage initialdata={initialData} />;
};

export default Page;
