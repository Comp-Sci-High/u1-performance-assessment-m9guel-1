// 1st Floor
let gymatoriumLock = true;
gymatoriumLock = false
// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 2nd Floor
// Do not modify these arrays directly
let weworkItems = ["loaner laptop", "whiteboard", "conference room", "couch", "printer", "shared table", "Wi-Fi router", "plants", "office chair", "power outlets"];
let computerLabItems = ["desktop computers", "monitors", "broken laptop", "mice", "Wi-Fi router", "printer", "power strips", "headphones", "USB drives", "chairs", "desks"];
let mprItems = ["mirrors", "speakers", "chairs", "portable stereo", "projector", "chairs", "posters"];

weworkItems.shift("loaner laptop")
weworkItems.push("loaner laptop")
console.log(weworkItems)

computerLabItems[2] = "fixed laptop"
console.log(computerLabItems)

console.log(mprItems.length)
console.log(weworkItems.length)
console.log(computerLabItems.length)
let MPR = 7
let WWI = 10
let CLI = 11
let keytest1 = MPR + WWI + CLI
console.log(keytest1)

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 3rd Floor
// Do not modify these objects directly
let scoValues = {
    "S": "Self-awareness",
    "C": "C",
    "O": "O",
    "R": "Resilience"
}

scoValues.C = "Consistency"
scoValues.O = "Ownership"
scoValues["E"] = "Excellence"
console.log(scoValues)

let afterSchoolClubs = {
    athletic: [
        {
            club: "Soccer Club",
            location: "St. Mary's Park"
        },
        {
            club: "Flag Football",
            location: "St. Mary's Park"
        },
        {
            club: "Volleyball",
            location: "Gymnatorium"
        }
    ],
    
    social: [
        {
            club: "Gaming Club",
            location: 305
        },
        {
            club: "Art Club",
            location: 417
        },
        {
            club: "Gardening Club",
            location: 311
        }     
    ]
}


afterSchoolClubs.athletic[0].club = "British Football Club"

afterSchoolClubs.social[2].location = "Balcony"

console.log(afterSchoolClubs)
// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 4th Floor
// Uncomment the code below to begin this task

function testingFor (snacks, pets){
return "Raccoon has been appeased"
}
let takeCareOfPet = testingFor("hotdog", 9)
    if ("hotdogs" === "hotdogs" && 14 > 10) {
        console.log("Raccoon has been appeased")
    } else {
        console.log ("The raccoon bit you and you died of rabies.")
    
}


console.log(takeCareOfPet)



// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 5th Floor

let arraytest = [" "]

function msgTest (message){
return message
}

let test1 = msgTest("Hey")
console.log(test1)
// Commit and show us to unlock the next floor's instructions
