export class Employee{
    empId: number;
    name: string;
    city: string;
    state: string;
    email: string;
    contact: string;
    address: string;
    pinCode: string;

    constructor(){
        this.empId=0;
        this.name="";
        this.address="";
        this.city="";
        this.contact="";
        this.email="";
        this.state="";
        this.pinCode="";
    }
}