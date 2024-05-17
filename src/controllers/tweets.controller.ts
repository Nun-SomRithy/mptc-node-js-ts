import { Request, Response } from "express";
import tweetModel from "../models /tweet.model";


const getTweetById = async (req:Request ,  res: Response) => {
    const id = req.params._id
    const tweet = await tweetModel.findById(id)
    res.send(tweet)
}

export  const tweetController = {
    getTweetById
}