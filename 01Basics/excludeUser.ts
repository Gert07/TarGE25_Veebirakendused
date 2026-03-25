type RoleExclude = "admin" | "user" | "moderator"
type ExcludeRole = "testing" | "admin" | "user" | "security"

//võta mõlemast typest kokku ja välista teatud väärtused
type Combined = RoleExclude | ExcludeRole

type O = Exclude<Combined, "user" | "moderator">

//If not 2.00 then 10.00
function getFree(isMember: User) {
    return isMember ? "$2.00" : "$10.00"
}