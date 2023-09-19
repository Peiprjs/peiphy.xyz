import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { DesktopTemplateIcon } from './DesktopTemplateIcon.js';
import classes from './Frame1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3:3 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.desktopTemplate}>
        <DesktopTemplateIcon className={classes.icon} />
      </div>
    </div>
  );
});
