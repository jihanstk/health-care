// import mongoose from "mongoose";
// import { NextResponse } from "next/server";
// import { dbConnection } from "../../../lib/db";
// import { Doctor } from "../../../lib/modal/modal";

import { dbConnection } from '@/lib/db';
import { Doctor } from '@/lib/modal/modal';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export const GET = async () => {
	let data = [];
	try {
		await mongoose.connect(dbConnection);
		data = await Doctor.find();
	} catch (error) {
		data = { success: false, message: error };
	}
	return NextResponse.json({ result: data });
};
export const POST = async (req) => {
	const reqData = await req.json();
	await mongoose.connect(dbConnection);
	const doctorData = new Doctor(reqData);
	console.log(doctorData);
	const result = await doctorData.save();
	return NextResponse.json({ result, success: true });
};
// export const GET=async()=>{
//   let data = [];
//   try {
//     await mongoose.connect(dbConnection)
//      data= await Doctor.find()
//   } catch (error) {
//     return NextResponse.json({success:false,message:error})
//   }
//   return NextResponse.json({data})
// }
