export class ToDo{
    id: number;
    data: string;
    isCompleted : boolean = false;
    constructor( data: string, isCompleted: boolean){
         this.data = data; this.isCompleted = isCompleted;
    }

}