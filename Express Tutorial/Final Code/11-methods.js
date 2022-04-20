const express = require("express");
const app = express();
let { people } = require("./data"); // destructured the people over here

// to use the static resources
app.use(express.static("./public"));

// to parse the form data
app.use(express.urlencoded({ extended: false }));

// used to get the data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});


// used to insert the data
app.post("/api/people", (req, res) => {
  const { name } = req.body; // getting the name from the javascript.html file
    if(!name){
        return res.status(400).json({success: false, msg: 'Please provide name value'})
    }
     res.status(201).json({success: true, person: name});
});


app.post('/api/postman/people', (req, res)=>{
    const {name}= req.body;
    if(!name){
        return res.status(400).json({success: false, msg:'please provide name value' });
    }
    
    res.status(201).json({success: true, data: [...people, name]})
})

// to update the data
app.put('/api/people/:id', (req, res)=>{
    const {id}=req.params;
    const {name}=req.body;

    const person=people.find((person)=>person.id===Number(id));

    if(!person){
        return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }

    const newPeople=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name; // name will not be printed due to error in html file
        }
        return person;
    })

    res.status(200).json({success: true, data: newPeople})
})

app.delete('/api/people/:id', (req, res)=>{
    const {id}=req.params;
    const person=people.map((person)=> person.id===Number(id))
    if(!person){
        return res.status(404).json({success: false, msg: `no person found with id ${id}`});
    }

    const deletePeople=people.filter((person)=>person.id !== Number(id)); // will print the data in which the id is not there which we specified
    
    return res.status(200).json({success: true, data: deletePeople});
})











app.listen(5000, () => {
  console.log("listening..");
});

