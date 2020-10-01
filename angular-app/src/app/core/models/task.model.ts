import { User } from './user.model';

export class Task {
    public id : number; 
    public title : string;
    public description : string;
    public assignees : User[];
    public status : string;
    public start_date : Date;
    public end_date : Date;
}

export class TaskStatus{
    public static STATUS_TO_DO = "TODO";
    public static STATUS_IN_PROGRESS = "IN PROGRESS";
    public static STATUS_DONE = "DONE"

    public static getAllStatus(){ 
        return [this.STATUS_TO_DO, this.STATUS_IN_PROGRESS, this.STATUS_DONE]
    }
}

