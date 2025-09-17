import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HelloWorld } from './hello-world/hello-world';
import { FormsModule } from '@angular/forms';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Landingpage } from './landingpage/landingpage';
import { ListItems } from './list-items/list-items';

@NgModule({
  declarations: [
    App,
    HelloWorld,
    HelpcenterComponent,
    FooterComponent,
    HeaderComponent,
    Landingpage,
    ListItems
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
