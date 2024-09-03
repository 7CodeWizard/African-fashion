import { prisma } from "@/lib/prisma";
import React, { useEffect, useState } from "react";
// import { Good } from "@prisma/client";
import GoodItem from "../common/GoodItem";

const fetchGoods = async () => {
    const goods = await prisma.good.findMany();
    return goods;
};

const InternationalGoods = async () => {
    const data = await fetchGoods();

    await prisma.$disconnect();

    const nonAfricanGoods = data.filter((good: any) => good.countryCode !== "BR");

    return (
        <section className="w-full mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-2">
            {nonAfricanGoods.map((good: any) => (
                <GoodItem good={good} key={good.id} />
            ))}
        </section>
    );
};

export default InternationalGoods;
