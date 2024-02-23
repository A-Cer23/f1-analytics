'use server'

import {drizzle} from "drizzle-orm/d1";
import {races} from "@/db/schema";
import {between, count} from "drizzle-orm";


export const runtime = "edge";

export async function actionsGetTotalRacesBetween(start: Number, end: Number) {
  try {
    const db = drizzle(process.env.D1DB);

    const data = await db.select({
      Season: races.year,
      TotalRaces: count(races.raceId)
    }).from(races)
      .where(between(races.year, start, end))
      .groupBy(races.year);

    return data;

  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}