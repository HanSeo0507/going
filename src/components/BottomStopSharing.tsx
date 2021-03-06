/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Text from './Text';
import styled from 'styled-components/native';
import {TEXT_UNSELECTED, UI_LINE} from '../utils/color';
import Button from './Button';

export interface Props {
  onPressSelect: (message: string) => void;
}

const SyltedView = styled.View`
  width: ${wp('100%')};
  z-index: 4;
  padding: 25px;
  padding-bottom: 15px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: white;
`;

const TitleText = styled(Text)`
  font-size: 20;
`;

const CaptionText = styled(Text)`
  bottom:${hp('2%')}
  font-size: 15;
`;

const BottomStopSharing: React.FC<Props> = ({onPressSelect}) => {
  const menus = [
    '계단이 있었어요',
    '경사가 심했어요',
    '엘레베이터가 있어요',
    '경사로가 있어요',
    '승강기가 있어요',
    '점자블록이 있어요',
  ];

  return (
    <SyltedView>
      <View>
        <TitleText weight={700}>위치를 중단하시겠습니까?</TitleText>
        <CaptionText>길을 설명해주세요 ! </CaptionText>
        {menus.map((menu, i, arr) => {
          return (
            <View
              key={i}
              style={{
                borderTopWidth: 1,
                borderBottomWidth: arr.length - 1 === i ? 1 : 0,
                borderColor: UI_LINE,
              }}>
              <Button
                label={menu}
                textColor={TEXT_UNSELECTED}
                color="white"
                onPress={() => onPressSelect(menu)}
                text={{weight: 400}}
              />
            </View>
          );
        })}
      </View>
    </SyltedView>
  );
};

export default BottomStopSharing;
