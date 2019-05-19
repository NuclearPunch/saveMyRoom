import styled from 'styled-components/native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Input,Item,Button,Title,Icon} from 'native-base';


export const Card=styled.View`
  height:208px;
  width:100%;

  border-bottom-width:1px;
  border-color:#eeeeee;
`

export const FirstRowFirstTitle = styled.Text`
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: rgba(88, 88, 88, 0.9);
    `

export const FirstRowSecondTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: rgba(255, 80, 80, 0.9);
`
export const FirstRowThirdTitle = styled.Text`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.1px;
  color: rgba(71, 71, 71, 0.9);
`


export const FirstRowRightItem = styled.View`
  width: 60px;
  height: 30px;
  border-radius: 4px;
  border-width:1px;
  border-color:#cccccc;
  justify-content:center;
  align-items:center;
`
export const FirstRowRightLable = styled.Text`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1px;
  text-align: center;
  color: rgba(128, 128, 128, 0.9);
`

export const SecondRowRightBigTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: rgba(27, 27, 27, 0.9);
  margin-bottom:3px;
`
export const SecondRowRightSmallTitle = styled.Text`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.2px;
  color: rgba(71, 71, 71, 0.9);
  flex: 1;
  height:5;
`
export const SecondRowRightButton = styled(Button)`
width: 100%;
height: 32px;
border-radius: 4px;
background-color: #ededed;
bottom:-1px;
elevation:0;
`
export const SecondRowRightButtonTitle = styled.Text`
  width: 200px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-align: center;
  color: rgba(70, 70, 70, 0.9);
`

export const HeaderTitle=styled.Text`
font-size: 16px;
font-weight: 600;
letter-spacing: 0.5px;
text-align: center;
color: rgba(30, 30, 30, 0.9);
`
//position:absolute;
export const RightSideBox=styled.View`
  width:100%;
  height:100%;
  position:absolute;
  z-index:500;
  top:0;
  background-color:rgba(0, 0, 0, 0.1);
`
export const ContentRightBox=styled.View`
  width:30%;
  height:132px;
  position:absolute;
  z-index:600;
  right:0;
  top:0;
  background-color:#fff;
  
`
export const RightSideBoxItem=styled(Button)`
  width:100%
  height:100%
  background-color:#fff;
  border-bottom-width:1px;
  border-bottom-color:rgba(185,185,185,0.5)
  border-radius:0;
`
export const RightSideBoxItemTitle = styled.Text`
font-size: 14px;
letter-spacing: 0.1px;
color: rgba(193, 193, 193, 0.9);
margin-left:13%;
`

export const CenterBox=styled.View`
  width:100%;
  position:relative;
  height:100px;
  top:0;
  background-color:blue;
`

export const MyHeader = styled.View`
    width:100%;
    height:44px;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
    position:relative;
    elevation:1;
    background-color:#fff;
    border-radius: 0;
    border-color: 'rgba(185, 185, 185, 0.5)';
    border-bottom-width: 1;
    border-top-width: 0;
    


` 
export const Center = styled.View`
   height:100%;
   width:200px;
   align-items:center;
   justify-content:center;
`
export const LeftButton = styled.View`
       width:50px;
       height:100%;
`
export const RightButton = styled(Button)`
       align-items:center;
       justify-content:center;
       width:40px;
       height:100%;
       background-color:#fff;
       border-radius:0;
`




