import {Schema,model} from "mongoose"

let collection = "DogBreeds"
let schema = new Schema({
    breed:{type:String,required:true},
    origin:{type:String,required:true},
    size:{type:String,required:true},
    lifeExpectancy:{type:Number,required:true},
    hypoallergenic:{type:Boolean,required:true},
    huntingDog:{type:Boolean,required:true},
    temperament:{type:String,required:true},
    coatType:{type:String,required:true},
    color:{type:String,required:true},
    sheddingLevel:{type:String,required:true},
    trainability:{type:String,required:true}
},{
    timestamps:true
})

let DogBreed = model(collection,schema)

export default DogBreed