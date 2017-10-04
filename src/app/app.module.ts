import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgsRevealModule } from 'ng2-scrollreveal';

import { AppComponent } from './app.component';
import { ResumeHeaderComponent } from './layout/resume-header/resume-header.component';
import { ResumeSidebarComponent } from './layout/resume-sidebar/resume-sidebar.component';
import { ResumeContentComponent } from './layout/resume-content/resume-content.component';

import { SharedComponentModule } from './components/shared-component.module';

@NgModule({
  declarations: [
    AppComponent,
    ResumeHeaderComponent,
    ResumeSidebarComponent,
    ResumeContentComponent
  ],
  imports: [
    BrowserModule,
    SharedComponentModule,
    NgsRevealModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
