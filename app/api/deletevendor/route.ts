import prisma from "@/lib/prisma";

export async function DELETE(req: Request) {
  const data = await req.json();
  const { id } = data;

  await prisma.vendor.delete({
    where: {
      id: id,
    },
  });

  return new Response(JSON.stringify({ message: "delete success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
