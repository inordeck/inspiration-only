/*  import {  } from '';  */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/* model */
import { Story } from './story';

@Injectable()
export class StoryService {

	private basePath ='/volume-one';

	userId: string;
	story: FirebaseObjectObservable<Story> = null; // single story entry
	stories: FirebaseListObservable<Story[]> = null; // list of story entries

	constructor(
		private db: AngularFireDatabase,
		private router: Router,
		private afAuth: AngularFireAuth) {
			this.stories = db.list('/volume-one')
			this.afAuth.authState.subscribe(user => {
				if(user) this.userId = user.uid
			})
	}

	/* return single story entry */
	getStory(key: string): FirebaseObjectObservable<Story> {
		const storyPath = `${this.basePath}/${key}`;
		this.story = this.db.object(storyPath)
		return this.story
	}

	/* return multiple story entries */
	getStoryList(query = {}): FirebaseListObservable<Story[]> {
		if (!this.userId) return;
		this.stories = this.db.list(`volume-one/`);
		return this.stories
	}

	/* create new story */
	createStory(story: Story): void {
		story.userId = this.userId
		this.stories.push(story)
			.catch(error => this.handleError(error))
		this.router.navigate(['/nominate'])

	}

	/* update story */
	updateStory(key: string, value: any): void {
		this.stories.update(key, value)
			.catch(error => this.handleError(error))
	}

	/* delete a story */
	deleteStory(key: string): void {
		this.stories.remove(key)
			.catch(error => this.handleError(error))
	}

	/* default error handling */
	private handleError(error) {
		console.log(error);
	}

}
