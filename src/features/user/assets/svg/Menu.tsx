import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Menu = (props: SvgProps) => (
  <Svg width={31} height={24} fill="none" {...props}>
    <Path
      d="M9.076 2.77c0-1.02.812-1.847 1.815-1.847h18.151c1.002 0 1.815.827 1.815 1.846 0 1.02-.813 1.846-1.815 1.846H10.891c-1.003 0-1.815-.826-1.815-1.846ZM9.076 12c0-1.02.812-1.846 1.815-1.846h18.151c1.002 0 1.815.826 1.815 1.846s-.813 1.846-1.815 1.846H10.891c-1.003 0-1.815-.826-1.815-1.846ZM9.076 21.23c0-1.019.812-1.845 1.815-1.845h18.151c1.002 0 1.815.826 1.815 1.846s-.813 1.846-1.815 1.846H10.891c-1.003 0-1.815-.827-1.815-1.846ZM5.445 2.77c0 1.529-1.219 2.768-2.722 2.768C1.219 5.538 0 4.298 0 2.77 0 1.24 1.219 0 2.723 0c1.503 0 2.722 1.24 2.722 2.77ZM5.445 21.23c0 1.53-1.219 2.77-2.722 2.77C1.219 24 0 22.76 0 21.23c0-1.529 1.219-2.768 2.723-2.768 1.503 0 2.722 1.24 2.722 2.769ZM5.445 12c0 1.53-1.219 2.77-2.722 2.77C1.219 14.77 0 13.53 0 12s1.219-2.77 2.723-2.77c1.503 0 2.722 1.24 2.722 2.77Z"
      fill="#2B637B"
    />
  </Svg>
);

export default Menu;