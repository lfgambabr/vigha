const express = require('express');
const server = express();
server.use(express.json());
const persons = [{id:0, Nome:'João', Celular:'47 999'}];
server.get('/persons', (req, res) => {
    return res.json(persons);
});
server.post('/person', (req, res) => {
    const { name } = req.body; 
    persons.push(name);
    return res.json(persons); 
});
server.delete('/person/:index', (req, res) => {
    const { index } = req.params;
    persons.splice(index, 1);
    return res.send();
});
server.listen(3000);
