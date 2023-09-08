import { NextResponse } from "next/server";
import { coon } from "@/libs/mysql";

export function GET() {
    return NextResponse.json({ message: "Listando productos" });
    }

    
export async function POST(request) {
    try {
        const {name, description, price} = await request.json();

        const result = await  coon.query("INSERT INTO product SET ?", {
            name,
            description,
            price
        });
    
    
        return NextResponse.json({ 
            name,
            description,
            price,
            id: result.insertId,
        });
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status:500,
            }
        )
        
    }

    }