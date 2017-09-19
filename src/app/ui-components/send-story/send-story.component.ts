/*  import {  } from '';  */
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';

import { Story } from '../../shared/story/story';
import { StoryService } from '../../shared/story/story.service';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'lsl-send-story',
  templateUrl: './send-story.component.html',
  styleUrls: ['./send-story.component.css']
})
export class SendStoryComponent implements OnInit {

	@Input() story: Story = new Story();

	stories: FirebaseListObservable<Story[]>;

	constructor(
		private storyService: StoryService
	) { }

	ngOnInit() {
		this.stories = this.storyService.getStoryList({ limitToLast: 8 })
	}

	updateTimeStamp() {
		const date = new Date().getTime()
		this.storyService.updateStory(this.story.$key, { timeStamp: date })
	}

	createStory() {
		this.storyService.createStory(this.story)
		this.story = new Story()
	}

}
