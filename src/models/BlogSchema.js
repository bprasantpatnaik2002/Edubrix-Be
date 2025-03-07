import mongoose from "mongoose"
import 'dotenv/config'

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publishedAt: {
        type: String
    },
    link: {
        type: String, // Optional external link for reference
        required: false
    }
},{timestamps:true});

export const Blog=mongoose.model("Blog",BlogSchema);