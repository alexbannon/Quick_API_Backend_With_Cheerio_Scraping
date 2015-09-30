var express = require("express");
var router = express.Router();
var State = require("../db/connection").models.State;

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/states", function(req, res) {
  State.findAll().then(function(states){
    res.json(states);
  });
});

router.get("/states/:id", function(req, res) {
  State.findById(req.params.id).then(function(state){
    res.json(state);
  });
});

router.post("/states", function(req,res) {
  State.create(req.body).then(function(state){
    res.json(state);
  });
});

router.put("/states/:id", function(req,res){
  State.findById(req.params.id).then(function(state){
    if(!state){
      return error(res, "state not found");
    }
    state.update(req.body).then(function(updatedState){
      res.json(updatedState);
    });
  });
});

router.patch("/states/:id", function(req,res){
  State.findById(req.params.id).then(function(state){
    if(!state){
      return error(res, "state not found");
    }
    state.updateAttributes(req.body).then(function(updatedState){
      res.json(updatedState);
    });
  });
})

router.delete("/states/:id", function(req,res){
  State.findById(req.params.id).then(function(state){
    if(!state){
      return error(res, "state not found");
    }
    state.destroy().then(function(){
      res.json({success: true});
    });
  });
});

module.exports = router;
