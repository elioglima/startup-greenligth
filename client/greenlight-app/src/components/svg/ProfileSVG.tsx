import React from 'react';
import {Svg, Circle, Defs, Pattern, Use, Image} from 'react-native-svg';
import {View} from 'react-native';

export const ProfileSVG = () => {
  return (
    <View>
      <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        <Circle cx="25" cy="25" r="25" fill="url(#pattern0)" />
        <Defs>
          <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <Use href="#image0_205_468" transform="scale(0.000976562)" />
          </Pattern>
          <Image
            id="image0_205_468"
            width="1024"
            height="1024"
          />
        </Defs>
      </Svg>
    </View>
  );
};