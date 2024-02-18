import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        location:String,
        img: String,
        info:String,
        topLocations: Array,
    },
    {
        timestamps: true
    }
)

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

export default Post