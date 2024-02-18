import { NextResponse } from "next/server"
import connectMongoDB from "../../../libs/mongodb"
import Post from '../../../models/post'

export async function GET(request,{params}){
    const {id} = params
    await connectMongoDB()
    const post = await Post.findOne({_id: id})
    return NextResponse.json({post},{status:200})
}