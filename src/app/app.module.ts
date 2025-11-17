import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componnents/header/header.component';
import { RouterOutlet } from "@angular/router";
import { PainPointsComponent } from './componnents/pain-points/pain-points.component';
import { ContactFormComponent } from './componnents/contact-form/contact-form.component';
import { QuestionsandAnswersComponent } from './componnents/questionsand-answers/questionsand-answers.component';
import { AboutComponent } from './componnents/about/about.component';
import { HeaderIntroComponent } from './componnents/header-intro/header-intro.component';
import { RecommendationsComponent } from './componnents/recommendations/recommendations.component';
import { QuestionsComponent } from './componnents/questions/questions.component';
import { BonusesComponent } from './componnents/bonuses/bonuses.component';
import { PricingComponent } from './componnents/pricing/pricing.component';
import { NormalizationComponent } from './componnents/normalization/normalization.component';
import { SolutionComponent } from './componnents/solution/solution.component';
import { WebinarComponent } from './componnents/webinar/webinar.component';
import { CtaRegistrationComponent } from './componnents/cta-registration/cta-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PainPointsComponent,
    ContactFormComponent,
    QuestionsandAnswersComponent,
    AboutComponent,
    HeaderIntroComponent,
    RecommendationsComponent,
    QuestionsComponent,
    BonusesComponent,
    PricingComponent,
    NormalizationComponent,
    SolutionComponent,
    WebinarComponent,
    CtaRegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
