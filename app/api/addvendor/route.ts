import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const data = await req.json();
  const {
    vendor_name,
    vendor_address1,
    vendor_address2,
    bank_account_number,
    bank_name,
    country,
    city,
    zip_code,
  } = data;
  console.log(data, "api request made and inside body");

  if (
    !vendor_name ||
    !vendor_address1 ||
    !vendor_address2 ||
    !bank_account_number ||
    !bank_name ||
    !country ||
    !city ||
    !zip_code
  ) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 },
    );
  }

  const result = await prisma.vendor.create({
    data: data,
  });
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
