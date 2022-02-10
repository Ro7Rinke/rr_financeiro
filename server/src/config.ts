import { isDebug } from "./controller/args"
import fs from 'fs'
import { Credential } from "./model/type"

const credentials:Credential = JSON.parse(<string><unknown>fs.readFileSync(isDebug() ? `../databaseDev.credentials` : `../database.credentials`))

export {
    credentials
}