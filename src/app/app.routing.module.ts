/*  import {  } from '';  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/* services */
import { AuthGuard } from './shared/auth/auth.guard';
import { CoreModule } from './shared/auth/core.module';
import { StoryService } from './shared/story/story.service';

/* components */
import { WelcomeComponent } from './ui-components/welcome/welcome.component';
import { SignupComponent } from './ui-components/signup/signup.component';
import { SendStoryComponent } from './ui-components/send-story/send-story.component';
import { NominateComponent } from './ui-components/nominate/nominate.component';
import { VolumeOneComponent } from './volumes/volume-one/volume-one.component';


const routes: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'send-story', component: SendStoryComponent, canActivate: [AuthGuard] },
	{ path: 'nominate', component: NominateComponent, canActivate: [AuthGuard] },
	{ path: 'volume-one', component: VolumeOneComponent, canActivate: [AuthGuard] }
];

@NgModule ({
	imports: [ RouterModule.forRoot(routes, { enableTracing: true }),CommonModule ],
	exports: [ RouterModule ],
	providers: [ 
		AuthGuard, 
		StoryService
	]
})

export class AppRoutingModule { }
