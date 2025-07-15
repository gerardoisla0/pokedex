import { User } from "../entities/user.entity";
import { RequestRegister, StatusUser } from '../../data/sources/remote/interfaces/backend.interface';

export interface BackendUseCase {
    CheckStatusUseCase(email: string, token: string): Promise<StatusUser>;
    RegisterUserUseCase(request: RequestRegister): Promise<User>;
    LoginUserUseCase(email: string, password: string): Promise<any>;
}