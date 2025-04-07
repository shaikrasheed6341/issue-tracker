import { NextRequest } from "next/server";
import {z} from "zod";
const createIssueschema = z.object({
    title:z.string(),
    description:z.string()
})
export async function POST(req: NextRequest){
   const body = await req.json()
}
