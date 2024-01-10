import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increasingApiLimit = async () = {
    const { userId } = auth();


}

