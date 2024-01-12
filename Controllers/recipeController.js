const recipeModel = require("../Models/Database");
const multer = require("multer")
const path = require("path");
//Upload image 

const storage = multer.diskStorage({
    destination: (req, file , cb) => {
        cb(null , 'public/Images')

    },
    filename: (req, file, cb) =>  {
        cb(null, file.fieldname + "_"  + Date.now() + path.extname(file.originalname)) ;
      }

})

const upload = multer({ storage: storage }).single('image');

const postData = async (req, res) => {
    try {
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading
          return res.status(500).json({ msg: err.message });
        } else if (err) {
          // An unknown error occurred when uploading
          return res.status(500).json({ msg: err.message });
        }
  
        // No file upload error, proceed to save other form data
        try {
          console.log("req.body: ", req.body);
          console.log("req.file: ", req.file); // Contains file information if uploaded
  
          // Assuming 'recipeModel.create' expects both form data and an image path
          const newData = await recipeModel.create({
            ...req.body,
            image: req.file.filename// Save the path to the uploaded file in the database
          });
  
          console.log("new data: ", newData);
          res.status(200).json({
            data: newData,
            msg: "Data added successfully",
          });
        } catch (error) {
          res.status(400).json({ msg: error.message });
        }
      });

    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };


const getAllData = async (req, res) => {
  try {
    const newData = await recipeModel.find(req.query);
    console.log(req.query)
    res.status(200).json({
      data: newData,
      msg: "Data fetched successfuly",
    });
  } catch (error) {
    res.status(400).json({ msg: msg.error });
  }
};

const getDataById = async (req, res) => {
  try {
    const newData = await recipeModel.findById(req.params.id);
    res.status(200).json({
      data: newData,
      msg: "Get data by id ",
    });
  } catch (error) {
    res.status(400).json({ msg: msg.error });
  }
};

const updateData = async (req, res) => {
  try {
    const newData = await recipeModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json({
      data: newData,
      msg: "data update successfuly",
    });
  } catch (error) {
    res.status(400).json({ msg: msg.error });
  }
};

const deleteData = async (req, res) => {
  try {
    const newData = await recipeModel.findByIdAndDelete(req.params.id);
    if (newData) {
      res.status(200).json({
        msg: "data deleted",
      });
    } else {
      res.status(404).json({
        msg: "No data found with the provided ID",
      });
    }
  } catch (error) {
    res.status(400).json({ msg: msg.error });
  }
};

module.exports = {
  postData,
  getAllData,
  getDataById,
  updateData,
  deleteData,
};
