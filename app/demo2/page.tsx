import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DemoPage from "./pagee";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/api/getvendors", {
      method: "GET",
      headers: {},
    });
    return data.json();
  };
  const initialData = await fetchData();

  return <DemoPage initialdata={initialData} />;
};

export default Page;
