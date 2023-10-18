export const test=(req,res,next)=>{
    console.log(req);
    res.json({
        message:"test"
    })
}
export const add=(req,res,next)=>{
    console.log(req.body);
    const email=req.body.email;
    console.log("email ",email);

    res.json({
        email:"email"
    });
}