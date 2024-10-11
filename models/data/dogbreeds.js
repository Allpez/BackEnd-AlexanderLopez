import "dotenv/config.js" //Nos conectamos
import '../../config/database.js'  //Nos conectamos a la base de datos
import Dog from '../DogBreed.js' //conectamos al modelo

let Dogs = [
    {
        breed: "Labrador Retriever", // String
        origin: "Canada", // String
        size: "Large", // String
        lifeExpectancy: 12, // Number
        hypoallergenic: false, // Boolean
        huntingDog: true // Boolean
    },
    {
        breed: "German Shepherd",
        origin: "Germany",
        size: "Large",
        lifeExpectancy: 13,
        hypoallergenic: false,
        huntingDog: false
    },
    {
        breed: "Golden Retriever",
        origin: "United Kingdom",
        size: "Large",
        lifeExpectancy: 12,
        hypoallergenic: false,
        huntingDog: true
    },
    {
        breed: "French Bulldog",
        origin: "France",
        size: "Small",
        lifeExpectancy: 12,
        hypoallergenic: false,
        huntingDog: false
    },
    {
        breed: "Poodle",
        origin: "France",
        size: "Medium",
        lifeExpectancy: 15,
        hypoallergenic: true,
        huntingDog: false
    },
    {
        breed: "Beagle",
        origin: "United Kingdom",
        size: "Medium",
        lifeExpectancy: 15,
        hypoallergenic: false,
        huntingDog: true
    },
    {
        breed: "Chihuahua",
        origin: "Mexico",
        size: "Small",
        lifeExpectancy: 20,
        hypoallergenic: false,
        huntingDog: false
    },
    {
        breed: "Shih Tzu",
        origin: "Tibet",
        size: "Small",
        lifeExpectancy: 16,
        hypoallergenic: true,
        huntingDog: false
    },
    {
        breed: "Boxer",
        origin: "Germany",
        size: "Large",
        lifeExpectancy: 12,
        hypoallergenic: false,
        huntingDog: false
    },
    {
        breed: "Dalmatian",
        origin: "Croatia",
        size: "Large",
        lifeExpectancy: 13,
        hypoallergenic: false,
        huntingDog: false
    }
];


Dog.insertMany(Dogs)