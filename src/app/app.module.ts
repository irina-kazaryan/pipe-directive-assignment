import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskFirstComponent } from './task-first/task-first.component';
import { TaskSecondComponent } from './task-second/task-second.component';
import { CardComponent } from './task-first/card/card.component';

import { AgePipe } from './task-first/card/age.pipe';
import { JoinPipe } from './task-first/join.pipe';

import { BgColorDirective } from './task-second/bgColor.directive';

@NgModule({
  declarations: [			
    AppComponent,
      TaskFirstComponent,
      TaskSecondComponent,
      CardComponent,
      AgePipe,
      JoinPipe,
      BgColorDirective
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
