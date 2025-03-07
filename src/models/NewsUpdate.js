import mongoose from "mongoose"
import 'dotenv/config'

const NewsUpdateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    shortDescription: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String, // Name of the news author
        required: true,
        trim: true
    },
    link: {
        type: String, // External link to full news article
        required: false
    },
    publishedAt: {
        type: String,
        required: true
    }
},{timestamps:true});

export const NewsUpdate=mongoose.model("NewsUpdate",NewsUpdateSchema);