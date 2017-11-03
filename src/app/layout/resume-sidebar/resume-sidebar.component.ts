import { Component, OnInit } from '@angular/core';
import { ColumnChartComponent } from '../../components/column-chart/column-chart.component';

@Component({
  selector: 'app-resume-sidebar',
  templateUrl: './resume-sidebar.component.html',
  styleUrls: ['./resume-sidebar.component.css'],
  entryComponents: [ColumnChartComponent]
})
export class ResumeSidebarComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
