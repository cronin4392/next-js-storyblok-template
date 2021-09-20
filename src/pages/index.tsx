import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { PageItems } from '@/graphql/sdk';
import { sdk } from '@/lib/graphql-client';

type PageProps = { stories: PageItems };

const Home: NextPage<PageProps> = ({ stories }) => {
  return (
    <>
      <header>Welcome</header>
      <main>
        <ul>
          {stories.items.map(({ full_slug, name }) => (
            <li key={full_slug}>
              <Link href={full_slug}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const stories = (await sdk.pageItems()).PageItems || [];

  return {
    props: {
      stories,
    },
    // revalidate: 60,
  };
};

export default Home;
