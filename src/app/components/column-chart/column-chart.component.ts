import { Component, OnInit, ElementRef, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  @Input() chartInputs;
  @Input() title;
  private columnWidth;
  private columnHeight;
  private chartHeight;
  public columnObj = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.chartHeight = this.elRef.nativeElement.querySelectorAll('.column-chart')[0].clientHeight;
    this.columnObj = this.columnChart(this.chartInputs);
  }

  columnChart(columnObj) {
    this.columnWidth = 100 / columnObj.length;
    columnObj.forEach(element => {
      let obj = {};
      obj['name'] = element.name;
      obj['skill'] = element.skill;
      obj['height'] = this.chartHeight * (element.skill / 100);
      this.columnObj.push(obj);
    });
    return this.columnObj;
  }

  updateHeightAndWidth(index, object) {
    // console.log('index', index);
    // console.log(this);
    // console.log('elements', this.chartHeight);
  }

}
