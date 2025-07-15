import { BackendRepositoryImpl } from "../../../data/repositories/backendRepository";
import { RequestRegister, StatusUser } from "../../../data/sources/remote/interfaces/backend.interface";
import { User } from "../../entities/user.entity";
import { BackendUseCase } from "../backend.usecase";

const {checkStatus, registerUser, login} = new BackendRepositoryImpl();

export class BackendUseCaseImpl implements BackendUseCase{
    CheckStatusUseCase(email: string, token: string): Promise<StatusUser> {
        return checkStatus(email, token);
    }
    RegisterUserUseCase(request: RequestRegister): Promise<User> {
        return registerUser(request);
    }
    LoginUserUseCase(email: string, password: string): Promise<any> {
        return login(email, password);
    }
}