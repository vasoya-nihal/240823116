const express = require('express');
const app = express();
const studentRouter = require('./routes/studentRoutes');
const PORT  = 80;
app.use(express.json());

app.use('/students', studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});