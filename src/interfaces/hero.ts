import { HeroProps } from "@/components/Hero";
import { HeroStoryblok } from "@/interfaces/generated/components-schema";
import { mapStoryEditable } from "@/interfaces/storyblok";

export const mapHeroStory = (story: HeroStoryblok): HeroProps => {
  return {
    text: story.text || '',
    image: story.image,
    liveStory: mapStoryEditable(story)
  }
}