import { Image } from '@storyofams/storyblok-toolkit';
import { ImageType } from '@/interfaces/image';
import { Editable } from '@/interfaces/storyblok';
import { Maybe } from '@/utils/types';
import MaybeEditable from '@/components/MaybeEditable';
import styles from './styles.module.scss';

export type HeroProps = {
  text: string;
  image: Maybe<ImageType>;
  liveStory: Maybe<Editable>;
};

const Hero: React.FC<HeroProps> = ({ text, image, liveStory }) => {
  return (
    <MaybeEditable story={liveStory}>
      <div>
        {image && <Image width="100%" src={image.filename} fluid={1200} alt={text} lazy={false} />}
        <h1>{text}</h1>
      </div>
    </MaybeEditable>
  );
};

export default Hero;
