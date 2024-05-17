import { Request, Response } from "express";
import { userModel } from "../models /users.models";

  const getAllUsers = (async(req:Request ,res: Response) => {
    const users = await userModel.find({})
    return res.send(users)
  })

  const getUserById = ( async (req:Request ,res: Response) => {
    const userId = await userModel.findById(req.params.id)
    res.send(userId)
  })

  const createUser = (async (req: Request , res: Response) =>{
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
  
  const deleteUserById = (async(req:Request, res: Response) => {
    const userId = await userModel.deleteOne({_id:req.params.id});
    res.send(userId);
  })


export const userController = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUserById,
};