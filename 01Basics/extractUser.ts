type Role= "admin" | "user" | "moderator"

//selliselt saan osa andmeid kasutada
type V = Extract<Role, "admin" | "moderator">

type OtherRole= "testing" | "admin" | "user" | "moderator"

//niimoodi saab siis kask type omavahel kokku panna 
type x = Extract<Role, OtherRole>