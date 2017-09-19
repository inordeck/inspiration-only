/*  import {  } from '';  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* services */
import { StoryService } from './story.service';

/* components */
import { VolumeOneComponent } from '../../volumes/volume-one/volume-one.component';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		AngularFireDatabaseModule
	],
	declarations: [
		VolumeOneComponent
	],
	providers: [
		StoryService
	]
})

export class StoryModule { }
