export interface ResponseRegister {
    id:           string;
    email:        string;
    fullName:     string;
    firebaseUUID: string;
}

export interface RequestRegister {
    email:    string;
    password: string;
    fullName: string;
}

export interface StatusUser {
    email:    string;
    id: string;
    fullName: string;
}
