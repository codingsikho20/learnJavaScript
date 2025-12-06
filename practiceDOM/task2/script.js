let arr = [
    {
        team: "Mumbai Indians",
        shortName: "MI",
        captain: "Hardik Pandya",
        trophies: 5,
        primary: "Blue",
        secondary: "Gold",
        profession: "Most successful team, strong winning culture."
    },
    {
        team: "Chennai Super Kings",
        shortName: "CSK",
        captain: "Ruturaj Gaikwad",
        trophies: 5,
        primary: "Yellow",
        secondary: "Blue",
        profession: "Iconic yellow jersey, consistent top performer."
    },
    {
        team: "Kolkata Knight Riders",
        shortName: "KKR",
        captain: "Ajinkya Rahane",
        trophies: 3,
        primary: "Purple",
        secondary: "Gold",
        profession: "Bold royal theme, aggressive style."
    },
    {
        team: "Royal Challengers Bengaluru",
        shortName: "RCB",
        captain: "Rajat Patidar",
        trophies: 1,
        jerseyColor: "Red",
        secondary: "Dark Blue",
        profession: "Very popular fanbase, won first title in 2025."
    },
    {
        team: "Rajasthan Royals",
        shortName: "RR",
        captain: "Sanju Samson",
        trophies: 1,
        primary: "Pink",
        secondary: "Blue",
        profession: "First IPL champions, unique pink jersey."
    },
    {
        team: "Sunrisers Hyderabad",
        shortName: "SRH",
        captain: "Pat Cummins",
        trophies: 1,
        jerseyColor: "Orange",
        secondary: "Black",
        profession: "Strong bowling side, energetic orange theme."
    },
    {
        team: "Gujarat Titans",
        shortName: "GT",
        captain: "Shubman Gill",
        trophies: 1,
        primary: "Dark Blue",
        secondary: "Gold",
        profession: "New franchise with quick success."
    },
    {
        team: "Punjab Kings",
        shortName: "PBKS",
        captain: "Shreyas Iyer",
        trophies: 0,
        primary: "Red",
        secondary: "Gold",
        profession: "Strong batting lineup, trophy yet to come."
    },
    {
        team: "Delhi Capitals",
        shortName: "DC",
        captain: "Axar Patel",
        trophies: 0,
        primary: "Blue",
        secondary: "Red",
        profession: "Young dynamic team, improving every season."
    },
    {
        team: "Lucknow Super Giants",
        shortName: "LSG",
        captain: "Rishabh Pant",
        trophies: 0,
        primary: "Dark Blue",
        secondary: "Red",
        profession: "New energetic team with strong talent."
    }
]

let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let winner = arr[Math.floor(Math.random()* arr.length)]
    h1.innerHTML = winner.team
    h1.innerHTML = winner.shortName
    h1.style.backgroundColor = winner.secondary
    body.style.backgroundColor = winner.primary
    
})