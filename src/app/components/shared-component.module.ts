import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { NgsRevealModule } from 'ng2-scrollreveal';

@NgModule({
  imports: [
    CommonModule,
    NgsRevealModule
  ],
  declarations: [ColumnChartComponent, VerticalTimelineComponent],
  exports: [ColumnChartComponent, VerticalTimelineComponent]
})
export class SharedComponentModule { }
