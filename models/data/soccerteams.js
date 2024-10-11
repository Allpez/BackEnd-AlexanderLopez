import "dotenv/config.js" //Nos conectamos
import '../../config/database.js'  //Nos conectamos a la base de datos
import SoccerTeam from '../SoccerTeam.js' //conectamos al modelo

let SoccerTeams = [
    {
        name: "Real Madrid", // String
        city: "Madrid", // String
        stadium: "Santiago Bernabéu", // String
        capacity: 81044, // Number
        founded: 1902, // Number
        inFirstDivision: true // Boolean
    },
    {
        name: "FC Barcelona",
        city: "Barcelona",
        stadium: "Camp Nou",
        capacity: 99354,
        founded: 1899,
        inFirstDivision: true
    },
    {
        name: "Atlético de Madrid",
        city: "Madrid",
        stadium: "Metropolitano",
        capacity: 68456,
        founded: 1903,
        inFirstDivision: true
    },
    {
        name: "Sevilla FC",
        city: "Seville",
        stadium: "Ramón Sánchez Pizjuán",
        capacity: 43883,
        founded: 1890,
        inFirstDivision: true
    },
    {
        name: "Valencia CF",
        city: "Valencia",
        stadium: "Mestalla",
        capacity: 55000,
        founded: 1919,
        inFirstDivision: true
    },
    {
        name: "Real Sociedad",
        city: "San Sebastián",
        stadium: "Reale Arena",
        capacity: 39800,
        founded: 1909,
        inFirstDivision: true
    },
    {
        name: "Real Betis",
        city: "Seville",
        stadium: "Benito Villamarín",
        capacity: 60720,
        founded: 1907,
        inFirstDivision: true
    },
    {
        name: "Villarreal CF",
        city: "Villarreal",
        stadium: "La Cerámica",
        capacity: 23500,
        founded: 1923,
        inFirstDivision: true
    },
    {
        name: "Athletic Club",
        city: "Bilbao",
        stadium: "San Mamés",
        capacity: 53289,
        founded: 1898,
        inFirstDivision: true
    },
    {
        name: "RCD Espanyol",
        city: "Barcelona",
        stadium: "RCDE Stadium",
        capacity: 40500,
        founded: 1900,
        inFirstDivision: false
    }
];

SoccerTeam.insertMany(SoccerTeams)