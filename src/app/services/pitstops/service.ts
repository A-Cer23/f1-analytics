import {drizzle} from "drizzle-orm/d1";
import {pitStops, constructors} from "@/db/schema";

export async function fetchPitStops() {
 try {
   const db = drizzle(process.env.D1DB);
   const results = await db.select().from(pitStops).all();
   console.log(results);
 }
 catch (error) {
   console.error('Database Error:', error);
 }
}