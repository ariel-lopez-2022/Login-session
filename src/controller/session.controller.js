const BdsessionManager = require('../dao/mongoManager/BdsessionManager')
const userModel = require('../dao/models/user.model')

const sessionLogin = async (req,res)=>{
   try {
           
     const {email, password} = req.body
     const user =await BdsessionManager.getSession(email, password)
       
      if(!user){
        return res.status(401).json({
           user
          })
        }
       
        return res.status(201).json({
          user
         })

    } catch (error) {
     return res.status(500).json({
      msg:"Error",
      playload: error.message,
    })     
   }
}

const loginRegister = async (req,res)=>{
  try {
     
      const {firstName,lastName, email, password} = req.body
      
      const userRgister = await BdsessionManager.createSession(firstName,lastName, email, password)
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
    loginRegister
}