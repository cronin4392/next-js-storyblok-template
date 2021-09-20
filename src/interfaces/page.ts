import { HeroProps } from '@/components/Hero';
import { StoryData } from 'storyblok-js-client';
import { PageStoryblok } from '@/interfaces/generated/components-schema';
import { mapHeroStory } from '@/interfaces/hero';
import { Editable, mapStoryEditable } from '@/interfaces/storyblok';
import { Maybe } from '@/utils/types';

export type PageStory = StoryData<PageStoryblok>;
export type PageStories = Array<PageStory>;

export type Page = {
  hero: HeroProps;
  liveStory: Maybe<Editable>;
}

export const mapPageStory = (story: PageStory): Page => {
  return {
    hero: mapHeroStory(story.content.hero[0]),
    liveStory: mapStoryEditable(story.content),
  }
}