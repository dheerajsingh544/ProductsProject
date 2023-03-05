export class Product {
    toBeDeleted:boolean;
    pid:number;
    name: string;
    stock: number;
    description: string;
    expiryDate: string;
    heading: string;
    url: string;
    
constructor(pid:number,name:string,stock:number,description:string,expiryDate:string,heading:string,url:string){
    this.pid=pid;
    this.name=name;
    this.stock=stock;
    this.description=description;
    this.expiryDate=expiryDate;
    this.heading=heading;
    this.url=url;
}
}