import React from 'react';
import {Icon} from 'react-native-eva-icons';
import styled from 'styled-components/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TEXT_DEFAULT} from '../utils/color';
import {ViewProps} from 'react-native';

const StyledButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${wp('14%')};
  height: ${wp('14%')};
  border-radius: ${wp('3%')};
  background-color: white;
`;

export interface IconButtonProps extends ViewProps {
  type: 'image' | 'icon';
  iconName?: string;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  type,
  iconName,
  color,
  children,
  ...props
}) => {
  return (
    <StyledButton style={{elevation: 5, shadowColor: '#B4B4B4'}} {...props}>
      {type === 'icon' ? (
        <Icon
          name={iconName}
          width={wp('8%')}
          height={hp('8%')}
          fill={color || TEXT_DEFAULT}
        />
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default IconButton;
