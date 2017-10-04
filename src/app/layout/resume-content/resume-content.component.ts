import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-content',
  templateUrl: './resume-content.component.html',
  styleUrls: ['./resume-content.component.css']
})
export class ResumeContentComponent implements OnInit {

  constructor() { }

  private expertise = [
    {
      'name': 'Jquery',
      'skill': 75
    },
    {
      'name': 'AngularJS',
      'skill': 60
    },
    {
      'name': 'Angular',
      'skill': 70
    },
    {
      'name': 'HTML/CSS',
      'skill': 80
    },
    {
      'name': 'JAVA',
      'skill': 40
    }
  ];

  ngOnInit() {
  }

}
