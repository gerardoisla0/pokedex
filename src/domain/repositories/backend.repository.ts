import { RequestRegister, StatusUser} from "../../data/sources/remote/interfaces/backend.interface";
import { User } from "../entities/user.entity";

export interface BackendRepository{
    checkStatus(email: string, token: string): Promise<StatusUser>;
    registerUser(request: RequestRegister): Promise<User>;
    login(email:string, password: string): Promise<any>;
}