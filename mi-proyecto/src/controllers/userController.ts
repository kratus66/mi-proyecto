import { createUsersService,getUsersService,deleteUsersService } from "../service/userService";
import IUser from "../routes/interface/IUsers";
import { Request, Response } from "express";
export const getUsers=async()=>{

};
export const createUsers=async(req:Request,res:Response)=>{
    try{
        const {name,email,active}=req.body;
        const newUser:IUser=await createUsersService({name,email,active});
        res.status(201).json(newUser);
        console.log(`usuario creado con exito: ${newUser}`);
    }
    catch(error){
        res.status(500).json({error:'Unknown error en el controlador'});
    }
    
};
export const deleteUsers=async()=>{
    
};
