import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const MapIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c3.6-2.546 10-9.09 10-14.91C22 4.07 17.523 0 12 0S2 4.07 2 9.09C2 14.113 8.4 21.455 12 24Zm0-10.182c2.872 0 5.2-2.116 5.2-4.727 0-2.61-2.328-4.727-5.2-4.727-2.872 0-5.2 2.116-5.2 4.727 0 2.61 2.328 4.727 5.2 4.727Z"
      fill="#2B637B"
    />
  </Svg>
);

export default MapIcon;
