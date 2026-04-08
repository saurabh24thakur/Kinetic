require('dotenv').config();
const app=require("./src/app");


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    if (!process.env.OPENROUTER_API_KEY) {
        console.warn("WARNING: OPENROUTER_API_KEY is not defined in the .env file. AI features will not work.");
    } else {
        console.log("OPENROUTER_API_KEY is configured.");
    }
});


