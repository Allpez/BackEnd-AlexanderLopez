import {Schema,model} from "mongoose"

let collection = "SoccerTeams"
let schema = new Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    stadium:{type:String,required:true},
    capacity:{type:Number,required:true},
    founded:{type:Number,required:true},
    inFirstDivision:{type:Number,required:true},
},{
    timestamps:true
})

let SoccerTeam = model(collection,schema)

export default SoccerTeam