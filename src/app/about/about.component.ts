import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'About us';
  // age = 29;
  age: number;
  info = { email: 'ch.panuwat99@gmail.com'}
  logo = './assets/images/logo.JPG'
  imgWidth = 100;
  isShow = false;
  users = ['JAY', 'Mary', 'John', 'Bob'];
  courses = [
    { name: 'PHP', price: 200 },
    { name: 'Angular', price: 299 },
    { name: 'Node', price: 400 },
    { name: 'React', price: 350 }
  ];

  myColor = 'yellow';
  isActice = false;

  constructor(private titleBar: Title) {
    this.age = 29;
   }


  ngOnInit() {
    this.titleBar.setTitle('เกี่ยวกับเรา');
  }

  go(){
    // alert('Hello JAY');
    this.title = 'เกี่ยวกับเรา';
    this.logo = './assets/images/logo.JPG'
    this.imgWidth = 100;
    // this.isShow = true;
    this.isShow = !this.isShow;
    this.myColor = 'red';
    this.isActice = true;
  }

}
