const authorize=(req, res, next)=>{
    const {user}=req.query;
    if(user=="Hasnain"){
       req.user={name: 'Hasnain'};
       console.log(req.user);
       next();
    }
    else{
        res.status(401).send("Unauthorized access");
    }
    next();
}

module.exports=authorize;