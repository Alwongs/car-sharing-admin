module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/car-sharing-admin/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}