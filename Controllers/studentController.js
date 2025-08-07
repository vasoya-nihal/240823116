exports.index = (req, res) => {
    res.send("Welcome to the Ph.D. Students API!\n");
};

exports.show = (req, res) => {
   res.send(`Showing details for student with ID: ${req.params.id}\n`);
};

exports.store = (req, res) => {
    res.send(`Data received: ${req.body.name}, ${req.body.city}\n`);
};

exports.update = (req, res) => {
    res.send(`Data updated for Id: ${req.params.id}, new name: ${req.body.name}, new city: ${req.body.city}\n`);
};

exports.delete = (req, res) => {
    res.send(`Data deleted for Id: ${req.params.id}\n`);
};
