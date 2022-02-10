import { Pool } from "pg"
import { credentials } from "../config"

const pool = new Pool(credentials)

export {
    pool
}

