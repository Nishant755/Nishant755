

const mid1= function ( req, res, next){
    console.log(req.path,req.ip,new Date())
    next();
} 
module.exports.mid1= mid1