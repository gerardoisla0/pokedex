import { User } from "../../domain/entities/user.entity";
import { BackendRepository } from "../../domain/repositories/backend.repository";
import { BackendMapper } from "../mapper/backend.mapper";
import { backendApi } from "../sources/remote/api/apiBackend";
import { RequestRegister, ResponseRegister, StatusUser } from "../sources/remote/interfaces/backend.interface";
import auth from '@react-native-firebase/auth';

export class BackendRepositoryImpl implements BackendRepository{

    async login(email: string, password: string): Promise<any> {
        try{

            const userRecord = await auth().signInWithEmailAndPassword(email, password);
            const idToken = await userRecord.user.getIdToken();
            return idToken;

        }catch(error){
            console.log(error);
            throw new Error("Error iniciando sesión");
        }
    }

    checkStatus = async (email: string, token: string): Promise<StatusUser> => {
        try{
            const url = '/auth/checkStatus';
            const inputData = {
                "email": email,
                "token": token
            }
            const {data} = await backendApi.post<StatusUser>(url, inputData);
            console.log('Respuesta Backend CheckStatus: ',data);
            return data;
            
        }catch(error){
            console.log(error);
            throw new Error("Error registrando usuario");
        }
    }

     registerUser = async (request: RequestRegister): Promise<User> => {
        try{
            const url = '/auth/register';
            const {data} = await backendApi.post<ResponseRegister>(url, request);
            console.log(data);
            const user: User = BackendMapper.backendAPItoUserEntity(data);
            return user;
            
        }catch(error){
            console.log(error);
            throw new Error("Error registrando usuario");
        }
    }
}
