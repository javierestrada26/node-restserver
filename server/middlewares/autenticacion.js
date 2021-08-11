const jwt = require('jsonwebtoken')
//
// verifica token
//

let verificaToken =(req,res,next)=> {
    let token = req.get('token')

jwt.verify(token,process.env.SEED,(err,decoded)=>{
    if(err){
        return res.status(401).json({
            ok:false,
            err:{
                message:'Token no valido'
            }
        })
    }
    req.usuario=decoded.usuario
    next();
})

}

//
// Verifica AdminRole
//
let verificaAdmin_role = (req,res,next)=>{
    let usuario = req.usuario

    if(usuario.role ==='ADMIN_ROLE'){
        next()
    }else{
        return res.json({
            ok:false,
            err:{
                message:'El usuario no es admin'
            }
        })
    }
}

module.exports ={
    verificaToken,
    verificaAdmin_role
}