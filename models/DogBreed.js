import {Schema,model} from "mongoose"

let collection = "DogBreeds"
let schema = new Schema({
    breed:{type:String,required:true},
    origin:{type:String,required:true},
    size:{type:String,required:true},
    lifeExpectancy:{type:Number,required:true},
    hypoallergenic:{type:Boolean,required:true},
    huntingDog:{type:Boolean,required:true},
},{
    timestamps:true
})

let DogBreed = model(collection,schema)

export default DogBreed