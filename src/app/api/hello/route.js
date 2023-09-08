import { NextResponse } from "next/server";
import { coon } from "@/libs/mysql";

export async function GET(){
    const result = await coon.query('SELECT NOW()')
    console.log(result)
    return NextResponse.json({ message: result[0]["NOW()"] });
}