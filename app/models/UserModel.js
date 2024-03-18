import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const usersSchema = mongoose.Schema({
       name: {
              type: String,
             required: true
       },
       email: {
              type: String,
              required: true
       },
       password: {
            type: String,
       },
       username: {
            type: String,
            default: 'null', 
      },
      role: {
           type: String,
            required: true
      },
      profilePic: {
           public_id: { type: String, default: 'null'},
            url: { type: String, default: 'null'}
      },
     verified: {
          type: Boolean,
          default: false
      }
}, { timestamps: true});

usersSchema.pre("save", async function () {
    if(!this.isModified('password')){
          return;
    }
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
})

usersSchema.methods.matchPasswords = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.models?.User || mongoose.model('User', usersSchema)

export default User;