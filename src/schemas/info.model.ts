import {Schema,model} from "mongoose";

interface IInfo{
    fullName:string;
    studentCode:string;
    heoreticalScore:string;
    executionScore:string;
    describe:string;
    evaluate:string;
    class:string
}

const infoSchema = new Schema<IInfo>({
    fullName:String,
    studentCode:String,
    heoreticalScore:String,
    executionScore:String,
    describe:String,
    evaluate:String,
    class:String
});



const Info=model<IInfo>('Info',infoSchema);
export {Info};
