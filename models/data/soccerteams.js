import "dotenv/config.js" //Nos conectamos
import '../../config/database.js'  //Nos conectamos a la base de datos
import SoccerTeam from '../SoccerTeam.js' //conectamos al modelo

let SoccerTeams = [
    {
        name: "Real Madrid", 
        city: "Madrid", 
        stadium: "Santiago Bernabéu", 
        capacity: 81044, 
        founded: 1902, 
        inFirstDivision: true, 
        coach: "Carlo Ancelotti", // String
        leagueTitles: 35, // Number
        championsLeagueTitles: 14, // Number
        mainRival: "FC Barcelona", // String
        colors: "White" // String
    },
    {
        name: "FC Barcelona",
        city: "Barcelona",
        stadium: "Camp Nou",
        capacity: 99354,
        founded: 1899,
        inFirstDivision: true,
        coach: "Xavi Hernández",
        leagueTitles: 27,
        championsLeagueTitles: 5,
        mainRival: "Real Madrid",
        colors: "Blue and Red"
    },
    {
        name: "Atlético de Madrid",
        city: "Madrid",
        stadium: "Metropolitano",
        capacity: 68456,
        founded: 1903,
        inFirstDivision: true,
        coach: "Diego Simeone",
        leagueTitles: 11,
        championsLeagueTitles: 0,
        mainRival: "Real Madrid",
        colors: "Red and White"
    },
    {
        name: "Sevilla FC",
        city: "Seville",
        stadium: "Ramón Sánchez Pizjuán",
        capacity: 43883,
        founded: 1890,
        inFirstDivision: true,
        coach: "Diego Alonso",
        leagueTitles: 1,
        championsLeagueTitles: 0,
        mainRival: "Real Betis",
        colors: "White and Red"
    },
    {
        name: "Valencia CF",
        city: "Valencia",
        stadium: "Mestalla",
        capacity: 55000,
        founded: 1919,
        inFirstDivision: true,
        coach: "Rubén Baraja",
        leagueTitles: 6,
        championsLeagueTitles: 0,
        mainRival: "Villarreal CF",
        colors: "White and Black"
    },
    {
        name: "Real Sociedad",
        city: "San Sebastián",
        stadium: "Reale Arena",
        capacity: 39800,
        founded: 1909,
        inFirstDivision: true,
        coach: "Imanol Alguacil",
        leagueTitles: 2,
        championsLeagueTitles: 0,
        mainRival: "Athletic Club",
        colors: "Blue and White"
    },
    {
        name: "Real Betis",
        city: "Seville",
        stadium: "Benito Villamarín",
        capacity: 60720,
        founded: 1907,
        inFirstDivision: true,
        coach: "Manuel Pellegrini",
        leagueTitles: 1,
        championsLeagueTitles: 0,
        mainRival: "Sevilla FC",
        colors: "Green and White"
    },
    {
        name: "Villarreal CF",
        city: "Villarreal",
        stadium: "La Cerámica",
        capacity: 23500,
        founded: 1923,
        inFirstDivision: true,
        coach: "Pacheta",
        leagueTitles: 0,
        championsLeagueTitles: 0,
        mainRival: "Valencia CF",
        colors: "Yellow"
    },
    {
        name: "Athletic Club",
        city: "Bilbao",
        stadium: "San Mamés",
        capacity: 53289,
        founded: 1898,
        inFirstDivision: true,
        coach: "Ernesto Valverde",
        leagueTitles: 8,
        championsLeagueTitles: 0,
        mainRival: "Real Sociedad",
        colors: "Red and White"
    },
    {
        name: "RCD Espanyol",
        city: "Barcelona",
        stadium: "RCDE Stadium",
        capacity: 40500,
        founded: 1900,
        inFirstDivision: false,
        coach: "Luis García",
        leagueTitles: 0,
        championsLeagueTitles: 0,
        mainRival: "FC Barcelona",
        colors: "Blue and White"
    }
];

SoccerTeam.insertMany(SoccerTeams)