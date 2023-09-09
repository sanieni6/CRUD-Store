import { coon } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const result = await coon.query("SELECT * FROM product WHERE id = ?", [
            params.id,
        ]);

        if( result.length === 0) {
            return NextResponse.json(
                {
                    message: "producto no encontrado",
                },
                {
                    status: 500,
                }
            );
        }
        return NextResponse.json(result[0]);
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
        
    }
    
    }

export async function DELETE(request, { params }){
    try {
        const result = await coon.query("DELETE FROM product WHERE id = ?", [params.id,]);
        if( result.affectedRows === 0 ){
            return NextResponse.json(
                {
                    message: "product not found",
                },
                {
                    status: 404,
                }
            );
        }

        return new Response(
            null,
            {
                status: 204,
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500
            }
        )
        
    }
}

export async function PUT( request, { params }){
    try {
        const data =  await request.json();
    const result = await coon.query("UPDATE product SET ? WHERE id = ?", [
        data, 
        params.id,
    ]);

    if( result.affectedRows === 0) {
        return NextResponse.json(
            {
                message: "Product not found",
            },
            {
                status: 404,
            }
        );
    }

    const updatedProduct = await coon.query(
        "SELECT * FROM product WHERE id = ?", 
        [params.id]
    );

    return NextResponse.json(updatedProduct[0]);
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500
            }
        );
        
    }
}