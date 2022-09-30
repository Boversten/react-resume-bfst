import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const GoogleScholarIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
      <g transform="scale(0.125 0.125)">
    <path
      d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM519.6 896c-212.2 0-384-171.8-384-384s171.8-384 384-384c103.6 0 190.4 37.8 257.2 100.4l-104.2 100.4c-28.6-27.4-78.4-59.2-153-59.2-131.2 0-238 108.6-238 242.4s107 242.4 238 242.4c152 0 209-109.2 217.8-165.6h-217.8v-131.6h362.6c3.2 19.2 6 38.4 6 63.6 0.2 219.4-146.8 375.2-368.6 375.2z"
      fill="currentColor"></path>
      </g>
  </Icon>
));

export default GoogleScholarIcon;