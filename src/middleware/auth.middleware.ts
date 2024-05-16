import { NextFunction, Request, Response } from "express";

function auth(req:Request , res: Response , next:NextFunction){
    console.log("This is middleWare for auth");
    next()
}


export const middleware = {
    auth
};