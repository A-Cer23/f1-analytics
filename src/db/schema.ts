import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const circuits = sqliteTable('circuits', {
  circuitId: integer('circuitId'),
  circuitRef: text('circuitRef'),
  name: text('name'),
  location: text('location'),
  country: text('country'),
  lat: text('lat'),
  lng: text('lng'),
  alt: integer('alt'),
  url: text('url'),
})

export const constructorResults = sqliteTable('constructorResults', {
constructorResultsId: integer('constructorResultsId'),
  raceId: integer('raceId'),
  constructorId: integer('constructorId'),
  points: integer('points'),
  status: text('status'),
})

export const constructorStandings = sqliteTable('constructorStandings', {
  constructorStandingsId: integer('constructorStandingsId'),
  raceId: integer('raceId'),
  constructorId: integer('constructorId'),
  points: integer('points'),
  position: integer('position'),
  positionText: text('positionText'),
  wins: integer('wins'),
})

export const constructors = sqliteTable('constructors', {
  constructorId: integer('constructorId'),
  constructorRef: text('constructorRef'),
  name: text('name'),
  nationality: text('nationality'),
  url: text('url'),
})

export const driverStandings = sqliteTable('driverStandings', {
  driverStandingsId: integer('driverStandingsId'),
  raceId: integer('raceId'),
  driverId: integer('driverId'),
  points: integer('points'),
  position: integer('position'),
  positionText: text('positionText'),
  wins: integer('wins'),
})

export const drivers = sqliteTable('drivers', {
  driverId: integer('driverId'),
  driverRef: text('driverRef'),
  number: integer('number'),
  code: text('code'),
  forename: text('forename'),
  surname: text('surname'),
  dob: text('dob'),
  nationality: text('nationality'),
  url: text('url'),
})

export const lapTimes = sqliteTable('lapTimes', {
  raceId: integer('raceId'),
  driverId: integer('driverId'),
  lap: integer('lap'),
  position: integer('position'),
  time: text('time'),
  milliseconds: integer('milliseconds'),
})

export const pitStops = sqliteTable('pitStops', {
  raceId: integer('raceId'),
  driverId: integer('driverId'),
  stop: integer('stop'),
  lap: integer('lap'),
  time: text('time'),
  duration: text('duration'),
  milliseconds: integer('milliseconds'),
})

export const qualifying = sqliteTable('qualifying', {
  qualifyId: integer('qualifyId'),
  raceId: integer('raceId'),
  driverId: integer('driverId'),
  constructorId: integer('constructorId'),
  number: integer('number'),
  position: integer('position'),
  q1: text('q1'),
  q2: text('q2'),
  q3: text('q3'),
})

export const races = sqliteTable('races', {
  raceId: integer('raceId'),
  year: integer('year'),
  round: integer('round'),
  circuitId: integer('circuitId'),
  name: text('name'),
  date: text('date'),
  time: text('time'),
  url: text('url'),
  fp1_date: text('fp1_date'),
  fp1_time: text('fp1_time'),
  fp2_date: text('fp2_date'),
  fp2_time: text('fp2_time'),
  fp3_date: text('fp3_date'),
  fp3_time: text('fp3_time'),
  quali_date: text('quali_date'),
  quali_time: text('quali_time'),
  sprint_date: text('sprint_date'),
  sprint_time: text('sprint_time'),
})

export const results = sqliteTable('results', {
  resultId: integer('resultId'),
  raceId: integer('raceId'),
  driverId: integer('driverId'),
  constructorId: integer('constructorId'),
  number: integer('number'),
  grid: integer('grid'),
  position: integer('position'),
  positionText: text('positionText'),
  positionOrder: integer('positionOrder'),
  points: integer('points'),
  laps: integer('laps'),
  time: text('time'),
  milliseconds: integer('milliseconds'),
  fastestLap: integer('fastestLap'),
  rank: integer('rank'),
  fastestLapTime: text('fastestLapTime'),
  fastestLapSpeed: text('fastestLapSpeed'),
  statusId: integer('statusId'),
})

export const seasons = sqliteTable('seasons', {
  year: integer('year'),
  url: text('url'),
})

export const sprintResults = sqliteTable('sprintResults', {
  sprintResultId: integer('sprintResultId'),
  raceId: integer('raceId'),
  driverId: integer('driverId'),
  constructorId: integer('constructorId'),
  number: integer('number'),
  grid: integer('grid'),
  position: integer('position'),
  positionText: text('positionText'),
  positionOrder: integer('positionOrder'),
  points: integer('points'),
  laps: integer('laps'),
  time: text('time'),
  milliseconds: integer('milliseconds'),
  fastestLap: integer('fastestLap'),
  fastestLapTime: text('fastestLapTime'),
  statusId: integer('statusId'),
})

export const status = sqliteTable('status', {
  statusId: integer('statusId'),
  status: text('status'),
})










