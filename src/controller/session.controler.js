const BdsessionManager = require('../dao/mongoManager/BdsessionManager')


const sessionLogin = async (req,res)=>{
   try {
    
     const {userEmail, password} = req.body
     const user =await BdsessionManager.getSession(userEmail, password)
      if(!user){
        return res.status(401).json({
            msg:"Usuario o Contraseña incorrecta",
            ok:false
          })
        }
        req.session.user = user 
        return res.json({
            msg:"Usuario Correcto",
            ok:true,
          })

    } catch (error) {
     return res.status(500).json({
      msg:"Error",
      playload: error.message,
    })     
   }
}

const registerLogin = async (req,res)=>{
  try {
      console.log(req.body)
      const {firstname, lastname, userEmail, password} = req.body
      console.log(firstname)
      console.log(lastname)
      console.log(userEmail)
      console.log(password)
      
      const userRgister = await BdsessionManager.createSession(firstname, lastname, userEmail, password)
      return res.send(userRgister)
    } catch (error) {
      return res.status(500).json({
      msg:"Error",
      playload: error.message,
    })     
    }
}

module.exports={
    sessionLogin,
    registerLogin
}