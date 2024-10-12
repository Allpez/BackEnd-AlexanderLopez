import "dotenv/config.js" //Nos conectamos
import '../../config/database.js'  //Nos conectamos a la base de datos
import Dog from '../DogBreed.js' //conectamos al modelo

let Dogs = [
    {
        breed: "Labrador Retriever", 
        origin: "Canada", 
        size: "Large", 
        lifeExpectancy: 12, 
        hypoallergenic: false, 
        huntingDog: true, 
        temperament: "Friendly",
        coatType: "Short",
        color: "Black",
        sheddingLevel: "Moderate",
        trainability: "High"
    },
    {
        breed: "German Shepherd",
        origin: "Germany",
        size: "Large",
        lifeExpectancy: 13,
        hypoallergenic: false,
        huntingDog: false,
        temperament: "Loyal",
        coatType: "Double",
        color: "Black and Tan",
        sheddingLevel: "High",
        trainability: "Very High"
    },
    {
        breed: "Golden Retriever",
        origin: "United Kingdom",
        size: "Large",
        lifeExpectancy: 12,
        hypoallergenic: false,
        huntingDog: true,
        temperament: "Intelligent",
        coatType: "Medium",
        color: "Golden",
        sheddingLevel: "High",
        trainability: "Very High"
    },
    {
        breed: "French Bulldog",
        origin: "France",
        size: "Small",
        lifeExpectancy: 12,
        hypoallergenic: false,
        huntingDog: false,
        temperament: "Playful",
        coatType: "Short",
        color: "Brindle",
        sheddingLevel: "Low",
        trainability: "Moderate"
    },
    {
        breed: "Poodle",
        origin: "France",
        size: "Medium",
        lifeExpectancy: 15,
        hypoallergenic: true,
        huntingDog: false,
        temperament: "Alert",
        coatType: "Curly",
        color: "White",
        sheddingLevel: "Low",
        trainability: "Very High"
    },
    {
        breed: "Beagle",
        origin: "United Kingdom",
        size: "Medium",
        lifeExpectancy: 15,
        hypoallergenic: false,
        huntingDog: true,
        temperament: "Curious",
        coatType: "Short",
        color: "Tri-color",
        sheddingLevel: "Moderate",
        trainability: "Moderate"
    },
    {
        breed: "Chihuahua",
        origin: "Mexico",
        size: "Small",
        lifeExpectancy: 20,
        hypoallergenic: false,
        huntingDog: false,
        temperament: "Alert",
        coatType: "Short",
        color: "Tan",
        sheddingLevel: "Low",
        trainability: "Moderate"
    },
    {
        breed: "Shih Tzu",
        origin: "Tibet",
        size: "Small",
        lifeExpectancy: 16,
        hypoallergenic: true,
        huntingDog: false,
        temperament: "Affectionate",
        coatType: "Long",
        color: "White and Brown",
        sheddingLevel: "Low",
        trainability: "Moderate"
    },
    {
        breed: "Boxer",
        origin: "Germany",
        size: "Large",
        lifeExpectancy: 12,
        hypoallergenic: false,
        huntingDog: false,
        temperament: "Energetic",
        coatType: "Short",
        color: "Fawn",
        sheddingLevel: "Moderate",
        trainability: "High"
    },
    {
        breed: "Dalmatian",
        origin: "Croatia",
        size: "Large",
        lifeExpectancy: 13,
        hypoallergenic: false,
        huntingDog: false,
        temperament: "Friendly",
        coatType: "Short",
        color: "White with Black Spots",
        sheddingLevel: "High",
        trainability: "High"
    }
];


Dog.insertMany(Dogs)