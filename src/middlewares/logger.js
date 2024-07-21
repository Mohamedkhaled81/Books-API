// We can add middleware globaly
// app.use()
// make sure to put it before app.use routers

// We can add it to a certain endpoints
// passing it inside a routing method 

exports.loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
}