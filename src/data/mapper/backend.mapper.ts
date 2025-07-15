import { User } from "../../domain/entities/user.entity";
import { ResponseRegister } from "../sources/remote/interfaces/backend.interface";

export class BackendMapper {

    static backendAPItoUserEntity(data: ResponseRegister): User{
        return {
            firebaseUUID: data.firebaseUUID,
            email: data.email,
            fullName: data.fullName
        }
    }
}