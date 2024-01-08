import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const vendors = await prisma.vendor.findMany();

  return new Response(JSON.stringify(vendors), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
