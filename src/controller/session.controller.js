const BdsessionManager = require('../dao/mongoManager/BdsessionManager')

const sessionLogin = async (req,res)=>{
   try {
           
     const {email, password} = req.body
     const user =await BdsessionManager.getSession(email, password)
     if (user) {
      req.session.user = user;
      res.send(user);
    } else {
      res.status(401).send('Email o contraseña incorrectos');
    }
  
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
             
      if (email === "adminCoder@coder.com"){
        const userAdmin = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password,
        rol:"administrador"
       }
       const users = await BdsessionManager.createSession(userAdmin) 
       req.session.user = users
              
      }
        const user = {
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password,
          rol:"users"
         }
       const users = await BdsessionManager.createSession(user) 
       req.session.user = users
         
      console.log(users)
      return res.json({user}) 
      

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