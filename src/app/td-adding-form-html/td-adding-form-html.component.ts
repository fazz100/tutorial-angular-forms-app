import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-td-adding-form-html',
  templateUrl: './td-adding-form-html.component.html',
  styleUrls: ['./td-adding-form-html.component.css']
})
export class TdAddingFormHtmlComponent implements OnInit {

  constructor() { }

  topics = ['Angular','React','Vue'];
  public myUser:User=new User('kangkong','billy_fazz@yahoo.com','09999999999','','morning',true);

  ngOnInit() {
  }

}
