
import express, { Request, Response } from "express";




const app = express();
const PORT = 3006;

//to fetch req bodies tht comes with content type - application.json
app.use(express.json())




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


