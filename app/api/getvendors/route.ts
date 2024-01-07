import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const data = await req.json();
  const { page, pageSize } = data;
  if (page < 1 || pageSize < 1) {
    throw new Error("Page number and page size must be greater than 0");
  }

  const vendors = await prisma.vendor.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return new Response(JSON.stringify(vendors), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
