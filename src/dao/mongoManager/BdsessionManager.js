const userModel = require ('../models/user.model')

class BdsessionManager {
   
  getSession = async (email, password) => {
    return await userModel.findOne({email, password});
  }
 
  createSession = async (firstName,lastName, email, password)=>{
      return await userModel.create({firstName,lastName, email, password})
  }
}
  module.exports = new BdsessionManager