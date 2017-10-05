/*  import {  } from '';  */
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Story } from '../../shared/story/story';
import { StoryService } from '../../shared/story/story.service';
import { StoryModule } from '../../shared/story/story.module';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-send-story',
  templateUrl: './send-story.component.html',
  styleUrls: ['./send-story.component.css']
})

export class SendStoryComponent implements OnInit {

	story: Story = new Story();

	constructor(
		private storyService: StoryService
	) { }

	ngOnInit() {
	}

	checkPassKey() {

	}

	createStory() {
		this.storyService.createStory(this.story)
		this.story = new Story()
	}

}
