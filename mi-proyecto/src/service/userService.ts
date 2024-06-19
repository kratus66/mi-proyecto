import UserDto from "../dto/usersDto";
import IUser from "../routes/interface/IUsers";

const users:IUser[]=[];
let id:number=1;

export const getUsersService=async()=>{

};
export const createUsersService=async(userData:UserDto):Promise<IUser>=>{
    //recibir los datos del usuario y enviarlos a la bd para crear el usuario
    const newUser={
        id:id,
        name:userData.name,
        email:userData.email,
        active:userData.active
    };
    users.push(newUser);
    id++;
    return newUser;
};
export const deleteUsersService=async()=>{
    
};