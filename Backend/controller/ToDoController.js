const ToDoModel = require("../models/ToDoModel");

module.exports.getToDos = async (req, res) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};
module.exports.saveToDo = (req, res) => {
  const { toDo } = req.body;
  ToDoModel.create({ toDo })
    .then((data) => {
      console.log("Save SuccesFull");
      res.status(201).send(data);
    })
    .catch((err) => {console.log(err)
        res.send({ erreo: err, msg: "Something went wrong!" });
    });
};

module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;
  ToDoModel.findByIdAndUpdate(id, {toDo})
    .then(() => {
      res.send("Update Succesfully...");
    })
    .catch((err) => {console.log(err)
        res.send({ erreo: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Delete Succesfully...");
    })
    .catch((err) => {console.log(err)
        res.send({ erreo: err, msg: "Something went wrong!" });
    });
  
};
