import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { CarditemsComponent } from './carditems/carditems.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DeeperDirectivesComponent } from './deeper-directives/deeper-directives.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { LimitCharsDirective } from './directives/limit-chars.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelpcenterComponent,
    FooterComponent,
    HeaderComponent,
    ListitemsComponent,
    CarditemsComponent,
    LandingpageComponent,
    DeeperDirectivesComponent,
    HighlightedDirective,
    LimitCharsDirective,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
