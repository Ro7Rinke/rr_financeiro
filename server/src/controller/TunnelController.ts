import { exec } from 'child_process'
import Logger from './logger'

export const startTunnel = (port:string, subdomain:string) => {
    const command:string = `lt --port ${port} --subdomain ${subdomain}`
    exec(command, (error, stdout, stderr) => {
        if(error){
            Logger.error(error)
        }

        if(stderr){
            Logger.error(stderr)
        }

        if(stdout){
            Logger.info(stdout)
        }
    })
}