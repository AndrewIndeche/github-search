import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Profile:any;
  repository:any;
  followers:any;
  following:any;
  username:string;
  notFound=false;

  constructor() { }

  ngOnInit() {
  }

}
