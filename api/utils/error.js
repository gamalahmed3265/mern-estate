export const notFound=(req,res,next)=>{
    const error=new Error(`Not Found ${req.originalUrl}`);
    res.status(404);
    next(error);
}
export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
};
export const errosMainHandlder=(err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
}