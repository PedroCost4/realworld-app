import { Prisma } from "@prisma/client"
import prisma from "../../../providers/prisma/client";

export const getRepository = async (id: string) => {
    const createdUser = await prisma.user.findFirst({
        where: {
            id,
        }
    })

    return createdUser;
}

