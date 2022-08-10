import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  fullname: {
    /* The name of this user */

    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  email:{
    type:String,
    required:[true,"Email is required"]
  },
  image_url: {
    /* Url to user image */

    required: [true, 'Please provide an image url for this user.'],
    type: String,
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)



