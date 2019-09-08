export class User {
    public constructor(
        public name:string,
   public email:string,
   public phone:string,
   public topic:string,
   public timePreference,
   public subscribe:boolean,
   public address:Address
   ){

   }

   
    /*public constructor(
         name:string,
     email:string,
     phone:string,
     topic:string,
     timePreference,
     subscribe:boolean

    ){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.subscribe=subscribe;
        this.timePreference=timePreference;
        this.topic=topic;

    }

    public name:string;
    public email:string;
    public phone:string;
    public topic:string;
    public timePreference;
    public subscribe:boolean;*/
}

export class Address{

    public constructor(
        public street:string,
        public city:string,
        public province
        ){}
}
