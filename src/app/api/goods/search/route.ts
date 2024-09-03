import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const text = searchParams.get("text");

    if (!text) {
        return new NextResponse(
            JSON.stringify({
                message: "Missing text parameter",
            }),
            { status: 400 }
        );
    }

    const goods = await prisma.good.findMany({
        where: {
            OR: [
                {
                    name: {
                        search: text,
                    },
                },

                {
                    type: {
                        search: text,
                    },
                },
            ],
        },
    });

    return new NextResponse(JSON.stringify(goods), { status: 200 });
}
