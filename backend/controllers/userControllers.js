import User from "../models/userModel.js";

// @CrateNewUser

export const CreateUser = async (req, res) => {
  const {name, email, age} = req.body;
  try {
    const user = await User.create({name, email, age});
    res.status(201).json({
      sucess: true,
      user,
    });
  } catch (error) {
    res.send(404).json({
      sucess: false,
      message: `Unsucessful ${error.message}`,
    });
  }
};

// @GetAllUsers
export const AllUsers = async (req, res) => {
  const user = await User.find();
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: `Unsucessful ${error.message}`,
    });
  }
};

// @GetSingleUser

export const SingleUser = async (req, res) => {
  const {id} = req.params;

  try {
    const user = await User.findById({_id: id});
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: `Unsucessful ${error.message}`,
    });
  }
};

// @UpdateSingleUser

export const UpdateSingleUser = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const user = await User.findOneAndUpdate({_id: id}, data, {new: true});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: `Unsucessful ${error.message}`,
      data: "No Data Updated Check Code ",
    });
  }
};

export const DeleteSingleUser = async (req, res) => {
  const {id} = req.params;
  try {
    const user = await User.findOneAndDelete({_id: id});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      sucess: false,
      message: "Unsucessful",
      error: error.message,
    });
  }
};

export default AllUsers;
