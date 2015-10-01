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

//The requested myApi route structure with query strings

router.get("/myApi", function(req, res){
  var input = req.query["state"];
  if(input.length == 2){
    State.findOne({ where:
      {
        abbr: {
          $iLike: input
        }
      }
    }).then(function(state){
      var obj = {
        "State": state.name,
        "Senators": state.senator_one + ", " + state.senator_two,
        "Governor": state.governor
      }
      res.json(obj);
    }).catch(function(err) {
      res.json(err)
    })
  }
  else{
    State.findOne({ where:
      {
        name: {
          $iLike: input
        }
      }
    }).then(function(state){
      var obj = {
        "State": state.name,
        "Senators": state.senator_one + ", " + state.senator_two,
        "Governor": state.governor
      }
      res.json(obj);
    }).catch(function(err) {
      res.json(err)
    });
  }
})

//Another way to go about it with params
router.get("/states/:stateName", function(req, res) {
  var input = req.params.stateName
  if(input.length == 2){
    State.findOne({ where:
      {
        abbr: {
          $iLike: input
        }
      }
    }).then(function(state){
      var obj = {
        "State": state.name,
        "Senators": state.senator_one + ", " + state.senator_two,
        "Governor": state.governor
      }
      res.json(obj);
    }).catch(function(err) {
      res.json(err)
    })
  }
  else{
    State.findOne({ where:
      {
        name: {
          $iLike: input
        }
      }
    }).then(function(state){
      var obj = {
        "State": state.name,
        "Senators": state.senator_one + ", " + state.senator_two,
        "Governor": state.governor
      }
      res.json(obj);
    }).catch(function(err) {
      res.json(err)
    });
  }

});


// Below in case post, update and delete functionality is needed

// router.post("/states", function(req,res) {
//   State.create(req.body).then(function(state){
//     res.json(state);
//   });
// });


// router.put("/states/:id", function(req,res){
//   State.findById(req.params.id).then(function(state){
//     if(!state){
//       return error(res, "state not found");
//     }
//     state.update(req.body).then(function(updatedState){
//       res.json(updatedState);
//     });
//   });
// });
//
// router.patch("/states/:id", function(req,res){
//   State.findById(req.params.id).then(function(state){
//     if(!state){
//       return error(res, "state not found");
//     }
//     state.updateAttributes(req.body).then(function(updatedState){
//       res.json(updatedState);
//     });
//   });
// })
//
// router.delete("/states/:id", function(req,res){
//   State.findById(req.params.id).then(function(state){
//     if(!state){
//       return error(res, "state not found");
//     }
//     state.destroy().then(function(){
//       res.json({success: true});
//     });
//   });
// });

module.exports = router;
