export class TitleQuestionLengthError extends Error{
    constructor(){
        super("Title question length has between 2 and 256")
    }
}