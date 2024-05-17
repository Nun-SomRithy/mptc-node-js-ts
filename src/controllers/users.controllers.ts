import { Request, Response } from "express";
import userModel from "../models /users.models";
import tweetModel from "../models /tweet.model";


const getAllUsers = (async (req: Request, res: Response) => {
  const users = await userModel.find({})
  return res.send(users)
})

const getUserById = (async (req: Request, res: Response) => {
  const userId = await userModel.findById(req.params.id)
  res.send(userId)
})

const createUser = (async (req: Request, res: Response) => {
  try {
    const { email, username, age } = req.body;
    const newUser = new userModel({
      email,
      username,
      age,
    });
    const user = await newUser.save();
    return res.send(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).send('Error creating user');
  }
})

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = await userModel.deleteOne({ _id: req.params.id });
    if (userId.deletedCount === 0) {
      return res.status(404).send('User not found');
    }
    return res.send(userId);
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).send('Error deleting user');
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateUser) {
      return res.status(404).send('User not found');
    }
    console.log(updateUser);
    return res.send(updateUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).send('Error updating user');
  }
};

const getTweetByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id; 
  const users = await userModel.findById(userId).select('tweets')
  res.send(users)
};

export const userController = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
  getTweetByUserId
};