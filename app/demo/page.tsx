import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Button, Table, Dialog } from "@radix-ui/themes";
import { getVendors, updateVendor, deleteVendor } from "@/lib/prisma-queries";
import { getSession } from "next-auth/react";

import AddVendor from "./add-vendor";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <div className="z-10 text-black">
      <div className="flex flex-row">
        <h1>Vendor Table</h1>
        <AddVendor />
      </div>
    </div>
  );
};

export default Page;
