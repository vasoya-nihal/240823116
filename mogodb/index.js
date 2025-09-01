const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Nihal:123@cluster0.h7r5pht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {                
    
});


const studentSchema = new mongoose.Schema({
    name: String,
    department: String, 
    startYear: Number,
    endYear: Number,
    enrollment: Number,
    address: String,
});
const Student = mongoose.model('Student', studentSchema);
console.log("MongoDB connected successfully");

const student = new Student({
    name: "Nihal Vasoya",
    department: "Computer Science",
    startYear: 2020,
    endYear: 2024,
    enrollment: 123456,
    address: "123 Main St, Anytown, USA",
});

student
    .save()
    .then(() => {
        console.log("Student saved successfully");
    })
    .catch((error)=>{
        console.error("Error saving student:", error);  
    });
