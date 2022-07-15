import { isDebug } from "../controller/args"
import fs from 'fs'
import Credential from "../type/Credential"

import 'dotenv/config'

export const credentials:Credential = JSON.parse(
    (isDebug()
        ? process.env.DATABASE_CREDENTIALS_DEV
        : process.env.DATABASE_CREDENTIALS)
    || ''
)

export const jwtExpiration = '7d'