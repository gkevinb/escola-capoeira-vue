module.exports = {
    publicPath: determineEnvirontment(process.env.NODE_ENV)
}
function determineEnvirontment(env){
    if (env === 'production')
        return '/'
    if (env === 'staging')
        return '/escola-capoeira-vue/'
    else
        return '/'
}