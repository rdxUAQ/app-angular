export class User {

    public id: number;

    public name: string;

    public username: string;

    public email: string;

  

  constructor(id?:number, name?:string, username?: string, email?: string){

    this.id = id || 0;
    this.name = name || '';
    this.username = username || '';
    this.email = email || '';

  }

  public getUser(): object{
    return this;
  }

  public toString(): string{

    let user : string = "{id: "+this.id+", name: "+this.name+", email: "+this.email+" username: "+this.username+"}";

    return user;
  }



}
