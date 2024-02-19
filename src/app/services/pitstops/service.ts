import {drizzle} from "drizzle-orm/d1";
import {pitStops, constructors, seasons, races, results} from "@/db/schema";
import {count, eq, sql} from "drizzle-orm";

export async function fetchPitStops() {
 try {
   const db = drizzle(process.env.D1DB);
   return await db.select().from(pitStops).all();
 }
 catch (error) {
   console.error('Database Error:', error);
 }
}
