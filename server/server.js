const { sequelize } = require('./models/index');
const app  = require('./app');
const PORT = process.env.PORT || 3000;

const init = async () => {
    try{
        await sequelize.sync();

        app.listen(PORT, ()=> {
            console.log(`Server listening at http://localhost:${PORT}`);
            
        });
    }
    catch (error) {
        console.log("Error starting server: ", error);
    }
    };


init();