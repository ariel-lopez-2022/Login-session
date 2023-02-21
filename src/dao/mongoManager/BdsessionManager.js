const userModel = require ('../models/user.model')

class BdsessionManager {
   
  getSession = async (userEmail, password) => {
      return await userModel.findOne({userEmail, password});
    
  }
  
  

  createSession = async (firstname, lastname, userEmail, password)=>{

    return await userModel.create({firstname, lastname, userEmail, password})
  }
}
  module.exports = new BdsessionManager