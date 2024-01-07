import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  //make prisma query to get total count of vendors
  const vendors = await prisma.vendor.count();
  const response = { vendor_count: vendors };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
