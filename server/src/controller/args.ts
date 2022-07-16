const args = process.argv.slice(2);

export const isDebug = ():boolean => {

    if(args.indexOf('--debug') >= 0)
        return true

    return false
}

export const getTokenFromAuthorization = (authorization:string = '') => {
    const array = authorization.split(' ')
    if(array.length == 2)
        return array[1]

    return ''
}