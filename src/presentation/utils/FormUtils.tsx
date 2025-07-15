export const emailValidator = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "El email no puede estar vacío.";
    if (!re.test(email)) return "El email debe ser válido.";
    return "";
}

export const passwordValidator = (password: string) => {
    if (!password) return "La contraseña no puede estar vacía.";
    if (password.length < 5) return "La contraseña debe tener al menos 5 caracteres.";
    return "";
}

export const nameValidator = (name: string) => {
    if (!name) return "El email no puede estar vacío.";
    return "";
}