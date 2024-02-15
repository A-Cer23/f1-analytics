declare global {
  namespace NodeJS {
    interface ProcessEnv {
      D1DB: D1Database;
    }
  }
}

export {}
