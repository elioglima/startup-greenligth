import React from 'react';
import {Svg, Path, Rect, Mask, G, Circle, Defs, Pattern, Use, Image} from 'react-native-svg';
import {View} from 'react-native';

export const MapSampleSVG = () => {
  return (
    <View>
      <Svg width="100%" height="200" viewBox="0 0 405 200" fill="none">
        <Mask id="mask0_205_521" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="190">
          <Rect x="0.5" y="0.5" width="399" height="189" rx="19.5" fill="#D9D9D9" stroke="black" />
        </Mask>
        <G mask="url(#mask0_205_521)">
          <Rect
            x="-808.5"
            y="-240.5"
            width="1339.97"
            height="1025"
            fill="url(#pattern0)"
            stroke="black"
          />
          <Circle opacity="0.3" cx="243.5" cy="86.5" r="22.5" fill="#01B282" fill-opacity="0.4" />
          <Path
            d="M250.361 92C251.107 92.4561 251.5 92.9734 251.5 93.5C251.5 94.0266 251.107 94.5439 250.361 95C249.615 95.4561 248.542 95.8348 247.25 96.0981C245.958 96.3614 244.492 96.5 243 96.5C241.508 96.5 240.042 96.3614 238.75 96.0981C237.458 95.8348 236.385 95.4561 235.639 95C234.893 94.5439 234.5 94.0266 234.5 93.5C234.5 92.9734 234.893 92.4561 235.639 92"
            stroke="#A25ACA"
            stroke-linecap="round"
          />
          <Path
            opacity="0.6"
            d="M250 84C250 89.0163 244.881 92.0348 243.398 92.804C243.145 92.9351 242.855 92.9351 242.602 92.804C241.119 92.0348 236 89.0163 236 84C236 80.134 239.134 77 243 77C246.866 77 250 80.134 250 84Z"
            fill="#A25ACA"
            fill-opacity="0.8"
          />
          <Circle cx="243" cy="84" r="3" fill="#7000AD" />
        </G>
        <Defs>
          <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <Use href="#image0_205_521" transform="scale(0.000539957 0.000705716)" />
          </Pattern>
          <Image
            id="image0_205_521"
            width="1852"
            height="1417"
          />
        </Defs>
      </Svg>
    </View>
  );
};