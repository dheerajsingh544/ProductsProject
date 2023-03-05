export class Setting {
    id:number;
    allowCreate:Boolean;
    allowEdit:Boolean;
    allowProductSearch:Boolean;
    allowDelete:Boolean;

    constructor(id:number,allowCreate:Boolean,allowEdit:Boolean,allowProductSearch:Boolean,allowDelete:Boolean){
        this.id=id;
        this.allowCreate=allowCreate;
        this.allowEdit=allowEdit;
        this.allowProductSearch=allowProductSearch;
        this.allowDelete=allowDelete;
    }

}