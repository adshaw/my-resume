import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { timeLineObj } from '../../../assets/workExperience';

declare let $: any;

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.css']
})
export class VerticalTimelineComponent implements OnInit {
  private navIsFixed;
  private timeLineObj = timeLineObj;

  constructor( @Inject(DOCUMENT) private document: Document) {

  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(event) {
  //   console.log('event', event);
  //   let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (number > 100) {
  //     this.navIsFixed = true;
  //   } else if (this.navIsFixed && number < 10) {
  //     this.navIsFixed = false;
  //   }
  // }
  ngOnInit() {
  }
}
