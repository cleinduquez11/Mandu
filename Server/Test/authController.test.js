const { Authenticate } = require("../Controllers/authController")


const req = {
    body: {
        user: "Clein",
        pass: "0427"
    }
}
   
test('Return', () => { 
    
    expect(Authenticate(req,res).toBe(
        {
            
                "message": "You are now Authenticated",
                "uSer": {
                    "username": "Clein",
                    "password": "0427"
                },
                "Access Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNsZWluIiwicGFzc3dvcmQiOiIwNDI3IiwiaWF0IjoxNjk1OTYwMTI2fQ.oQLLIHI8gfkxhci24bcnuihYFR9o6_rslJCMP-HS4Rs"
            
        }
    ))


})