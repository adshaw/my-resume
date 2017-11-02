import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { NgsRevealModule } from 'ng2-scrollreveal';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  imports: [
    CommonModule,
    NgsRevealModule,
    RoundProgressModule
  ],
  declarations: [ColumnChartComponent, VerticalTimelineComponent, CircleProgressComponent],
  exports: [ColumnChartComponent, VerticalTimelineComponent]
})
export class SharedComponentModule { }
