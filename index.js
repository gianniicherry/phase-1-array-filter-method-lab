const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,string){
    const driverMatch = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return driverMatch
}
function fuzzyMatch(drivers,string){
    const fuzz = drivers.filter(driversName => driversName.startsWith(string))
    return fuzz
}
function matchName(drivers,string){
    const nameMatch = drivers.filter(driverObj => driverObj.name === string)
    return nameMatch
}