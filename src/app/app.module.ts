import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DesignSectionComponent } from './design-section/design-section.component';
import { WhyClientsTrustUsComponent } from './why-clients-trust-us/why-clients-trust-us.component';
import { BusinessStrategyComponent } from './business-strategy/business-strategy.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DesignSectionComponent,
    WhyClientsTrustUsComponent,
    BusinessStrategyComponent,
    OurPartnersComponent,
    LatestBlogComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
