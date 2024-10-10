export class PasswordLengthError extends Error{
    constructor(){
        super("Password has length between 8 and 14 caractheres")
    }
}