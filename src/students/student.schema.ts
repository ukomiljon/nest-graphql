import {Schema} from 'mongoose'

export const StudentSchema=new Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    email:{type:String, required:true},
    course:{type:Number, required:true}
})

 