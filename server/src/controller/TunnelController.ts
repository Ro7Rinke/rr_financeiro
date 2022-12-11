import { exec } from 'child_process'
import Logger from './logger'

export const startTunnel = (port:string, subdomain:string) => {
    const command:string = `localtunnel --subdomain ${subdomain} --port ${port} https`//`lt --port ${port} --subdomain ${subdomain}`
     //localtunnel --subdomain my-subdomain --host example.com --port 443 https
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