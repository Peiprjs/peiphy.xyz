import { memo, SVGProps } from 'react';

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 203 210' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M202.049 145.062C187.718 155.052 170.293 160.91 151.5 160.91C102.623 160.91 63 121.287 63 72.41C63 42.4777 77.859 16.0163 100.604 0C44.6528 2.3043 0 48.3924 0 104.91C0 162.9 47.0101 209.91 105 209.91C148.768 209.91 186.282 183.13 202.049 145.062Z'
      fill='#F2C94C'
    />
  </svg>
);
const Memo = memo(MoonIcon);
export { Memo as MoonIcon };
