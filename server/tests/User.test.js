const { User } = require('../models/index');
const { sequelize } = require('../db');

describe("User model", () =>{
    beforeAll(async ()=> {
        await sequelize.sync({force:true});
    })

    test("can create User", async () =>{
        const newUser = await User.create({
            firstName: "John",
            lastName: "Doe",
            username: "johndoe",
            password:"password"
        })
        expect(newUser).toBeInstanceOf(User);
        expect(newUser.firstName).toBe("John");
        expect(newUser.lastName).toBe("Doe");
        expect(newUser.password).toBe("password")
    })
    test("can get a user", async () => {
        const testUser = await User.findByPk(1);
        expect(testUser.name).toBe("John");
      })

    
})
 


