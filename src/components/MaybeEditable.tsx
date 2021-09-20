import SbEditable from 'storyblok-react';
import { isSbEditableContent } from '@/utils/contentGuards';

type MaybeEditableProps = {
  story: unknown;
};

const MaybeEditable: React.FC<MaybeEditableProps> = ({ story, children }): React.ReactElement => {
  return isSbEditableContent(story) ? (
    <SbEditable content={story} key={story._uid}>
      {children}
    </SbEditable>
  ) : (
    <>{children}</>
  );
};

export default MaybeEditable;
