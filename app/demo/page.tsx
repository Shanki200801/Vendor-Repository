import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Button, Table, Dialog } from "@radix-ui/themes";
import { getVendors, updateVendor, deleteVendor } from "@/lib/prisma-queries";
import { getSession } from "next-auth/react";
import VendorTable from "./table";
import TableWrapper from "./tablewrapper";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <div className="z-10 flex flex-col items-center gap-6 text-black">
      <h1 className="font-display text-3xl font-semibold tracking-[0.01em]">
        Vendor Table
      </h1>
      <TableWrapper />
    </div>
  );
};

export default Page;
