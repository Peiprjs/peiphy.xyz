import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';
import { MoonIcon } from './MoonIcon.js';
import { StarsIcon } from './StarsIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:3 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.desktopTemplate}>
        <div className={classes.moon}>
          <MoonIcon className={classes.icon} />
        </div>
        <div className={classes.stars}>
          <StarsIcon className={classes.icon2} />
        </div>
        <div className={classes.myNewPersonalWebsiteIsComingSo}>My new personal website is coming soon!</div>
      </div>
    </div>
  );
});
