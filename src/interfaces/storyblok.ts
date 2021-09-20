import { StoryblokComponent } from 'storyblok-js-client';

export function mapStoryEditable({
  _uid,
  component,
  _editable,
}: StoryblokComponent<string>): Editable {
  return {
    _uid,
    component,
    _editable: _editable || null,
  };
}

export type Editable = {
  component: string;
  _uid: string;
  _editable?: string | null;
};
