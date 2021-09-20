import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { render } from 'storyblok-rich-text-react-renderer-ts';
import { sdk, staticPropsWithSdk } from '@/lib/graphql-client';
import { WithStoryProps, withStory, getExcerpt, getPlainText } from '@storyofams/storyblok-toolkit';
import { getParam } from '@/utils/urls';
import { mapPageStory, PageStory } from '@/interfaces/page';
import Hero from '@/components/Hero';
import MaybeEditable from '@/components/MaybeEditable';

type PageProps = WithStoryProps & { story: PageStory };

const Page = ({ story }: PageProps) => {
  const page = mapPageStory(story);
  return (
    <MaybeEditable story={page.liveStory}>
      <div>
        <Hero {...page.hero} />
        <h1>{story.content.title}</h1>
        <div>
          <p>Richtext renderer</p>
          {render(story.content.intro)}
        </div>
        <div>
          <p>Excerpt</p>
          {getExcerpt(story.content.intro)}
        </div>
        <div>
          <p>Plain text</p>
          {getPlainText(story.content.intro)}
        </div>
      </div>
    </MaybeEditable>
  );
};

export default withStory(Page);

export const getStaticProps: GetStaticProps<PageProps> = staticPropsWithSdk(
  async ({ params, sdk }) => {
    const slug = getParam(params, 'slug') || '';
    let story;
    let notFound = false;
    try {
      story = (await sdk.pageItem({ slug: `page/${slug}` })).PageItem;
    } catch (e) {
      notFound = true;
    }

    return {
      props: {
        story,
      },
      notFound: notFound || !story,
      revalidate: 60,
    };
  }
);

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = (await sdk.pageItems({ perPage: 100 })).PageItems?.items || [];
  const paths = stories.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
