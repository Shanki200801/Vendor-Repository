import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
  const data = await req.json();
  const {
    id,
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

  const vendor = await prisma.vendor.update({
    where: {
      id: id,
    },
    data: data,
  });

  return new Response(JSON.stringify(vendor), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
