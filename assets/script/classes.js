
export class User {
  #name;
  #email;
  constructor(id, name, userName, email){
    this.id = id;
    this.#name = name;
    this.userName = userName;
    this.#email = email;
  }

  set name(name){
    this.#name = name;
  }

  get name(){
    return this.#name;
  }


  set email(email){
    this.#email = email;
  }

  get email(){
    return this.#email;
  }

  getInfo(){
    return [this.name, this.email];
  }
}

export class Subscriber extends User {
  #canMonetize;

  constructor(id, name, userName, email, pages, groups, canMonetize){
    super(id, name, userName, email);
    this.pages = pages;
    this.groups = groups;
    this.#canMonetize = canMonetize;    
  }

  set canMonetize(canMonetize){
    this.#canMonetize = canMonetize;
  }

  get canMonetize(){
    return this.#canMonetize;
  }

}




