import mongoose from "mongoose"
import 'dotenv/config'

const CouponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true, trim: true },
    discountType: { type: String, enum: ["percentage", "fixed"], required: true },
    discountValue: { type: Number, required: true },
    validUntil: { type: String, required: true },
    isActive: { type: Boolean, default: true },
},{timestamps:true});

export const Coupon=mongoose.model("Coupon",CouponSchema);