import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name:{
    type: String
},
  image:{
    type: String
},
  email:{
    type: String
},
  cart:{
    type: Array
},
  wishlist:{
    type: Array
},
  emailVerified:{
    type: mongoose.Schema.Types.Mixed
},
products:{
  type:Array
}
  
})

export default mongoose.models.User || mongoose.model('User', UserSchema)



