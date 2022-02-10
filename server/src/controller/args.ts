const args = process.argv.slice(2);

const isDebug = ():boolean => {

    if(args.indexOf('--debug') >= 0)
        return true

    return false
}

export {
    isDebug
}