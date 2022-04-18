const express = require("express");
const ToDo = require("../model/ToDoList");
const { validationResult } = require("express-validator");

const read_List = async (req, res) => 
{
  ToDo.find({}, function(err, data) {
    if (err)
    res
    .json({
      success: false,
      data: err
    })
    else{
      res
      .json({
        success: true,
        data: data
      })
    }
  })
};


const delete_List = async (req, res) => {
    ToDo.findByIdAndDelete( {_id: req.params.id}, {})
      .then((data)=>
      {
           res.json({data});
      })
      .catch((err)=>
      {
      res.json(err);  
      }) 
};


const create_List = (req,res, next) => {

    const data = req.body;
    console.log(data)
    ToDo.create(data,function (err, data){
      if(err) 
      res.json({
        success:false,
        data: err
      })
      else
      res.json({
        success: true,
        data: data}
      )
    })
  
};


const update_List = async (req, res) =>{
  const updateList = req.body;
  ToDo.updateOne({_id : req.params.id},  updateList , function(err, data) {
    if(err)
        res.json({
            succeess:false,
            data:err
        })
        else{
            res.json({
                succeess:true,
                data: updateList
            })
        }
  });
};



module.exports = {
  read_List,
  delete_List,
  create_List,
  update_List
};