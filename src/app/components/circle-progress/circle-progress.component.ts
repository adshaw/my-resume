import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {

  @Input() value;
  @Input() name;
  @Input() semic;

  constructor() {
  }

  current: number;
  max: number = 50;
  stroke: number = 15;
  radius: number = 60;
  semicircle: boolean;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = 'steelblue';
  background: string = 'gainsboro';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;

  ngOnInit() {
    this.semicircle = this.semic;
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 5 + 'px'
    };
  }

}
