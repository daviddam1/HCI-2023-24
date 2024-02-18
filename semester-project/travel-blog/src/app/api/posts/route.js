import { NextResponse } from "next/server"
import connectMongoDB from "../../libs/mongodb"
import Post from "../../models/post"

export async function POST(request){
    const {id, location, img, info, topLocations} = await request.json()
    await connectMongoDB()
    await Post.create({id, location, img, info, topLocations})
    return NextResponse.json({message: "New post has been created"}, {status:201})
}

export async function GET() {
    await connectMongoDB()
    const posts = await Post.find()
    return NextResponse.json({posts})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Post.findByIdAndDelete(id)
    return NextResponse.json({message:"Post deleted"}, {status:200})
}

