require('dotenv').config();
const app=require("./src/app");


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    if (!process.env.GEMINI_API_KEY) {
        console.warn("WARNING: GEMINI_API_KEY is not defined in the .env file. AI features will not work.");
    } else {
        console.log("GEMINI_API_KEY is configured.");
    }
});


