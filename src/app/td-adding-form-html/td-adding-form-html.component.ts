import { Component, OnInit } from '@angular/core';
import { User, Address } from '../user';

@Component({
  selector: 'app-td-adding-form-html',
  templateUrl: './td-adding-form-html.component.html',
  styleUrls: ['./td-adding-form-html.component.css']
})
export class TdAddingFormHtmlComponent implements OnInit {

  constructor() { }

  topics = ['Angular','React','Vue'];
  public myUser:User=new User('kangkong','bonchon956@gmail.com','9999999999','','morning',true,new Address('Panget street Sitio Garapal ','Santa Rafael', 'Bulacan'));

  ngOnInit() {
  }

}
