import {drizzle} from "drizzle-orm/d1";
import {pitStops} from "@/db/schema";

export async function fetchPitStops() {
 try {
   const db = drizzle(process.env.D1DB);
   const results = await db.select().from(pitStops);
   console.log(results);
 }
 catch (error) {
   console.error('Database Error:', error);
 }
}