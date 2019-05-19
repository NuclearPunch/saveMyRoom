import React, { Component } from 'react';
import {Button,Text,Label,CheckBox,Container,Item,Input,Content,Picker} from 'native-base';
import styled from 'styled-components/native';


export const Page = styled(Container)`
    background-color: #f7f7f7;
    justify-content:flex-start;
    flex:1;
    align-items:center;
`
export const Box = styled(Content)`
   
   width:100%;
   height:100%;
   top:13%;
`

export const ConsumerTopTitle = styled(Text)`
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 0.2px;
    text-align: center;
    color: rgba(27, 27, 27, 0.9);
    top:6.5%;
`
export const ConsumerItem = styled(Item)`
    border-width:0;
    top:19%;
    width:89%;
    height:8%;
    background-color:#fff;
`
export const ConsumerItemInput = styled(Input)`
font-size: 16px;
font-weight: 500;
letter-spacing: 0.2px;
color: rgba(164, 164, 164, 0.9);
width:100%;
`

// export const ConsumerBottomItem = styled(Item)`
//     border-width:0;
//     background-color:#ffd200;
//     border-top-left-radius:14;
//     border-top-right-radius:14;
//     border-top-width:1px;
//     border-color:#ffd200;
//     elevation:20;
// `
export const ConsumerBottomItem = styled.TouchableOpacity`
    border-width:0;
    background-color:#ffd200;
    border-top-left-radius:0;
    border-top-right-radius:0;
    border-top-width:1px;
    border-color:#ffd200;
    elevation:20;
    height:100%;
    flex:1;
    justify-content:center;
    align-items:flex-start;
    
`
// export const ConsumerBottomItemInput = styled(Input)`
//   font-size: 16px;
//   font-weight: 600;
//   letter-spacing: 0.5px;
//   color: rgba(30, 30, 30, 0.9);
// `

export const ConsumerBottomItemInput = styled.Text`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: rgba(30, 30, 30, 0.9);
  margin-left:20px;
`

export const BottomBoxRightContentCount = styled.Text`
    font-size: 35px;
    font-weight: 900;
    letter-spacing: 1.1px;
    color: rgba(30, 30, 30, 0.9);
`


export const BottomBox = styled.View`
    position: absolute; 
    bottom: 0;
    width: 100%;
    height: 15%;
    z-index:1000;
`

export const BottomBoxRightContent = styled.View`
   flex:1;
   justify-content:flex-end;
   align-items:center;
   flexDirection:row;
`

export const BottomBoxLeftContent = styled.View`
   flex:1;
   align-items:flex-start;
   align-self:center;
`

export const ProduceCenter = styled.View`
    flex:0.7;
    width:88%;
    border-top-width:1px;
    border-top-color:#e3e3e3;
`

export const ProduceCenterTime = styled.Text`
    margin-top:10px;
    font-size: 16px;
    font-weight: bold;
    color: #353535;
    letter-spacing: 0.3px;
`


export const ProducerTop = styled.View`
   flex:0.3;
   alignSelf:flex-start;
   marginLeft:6%;
   top:5%;
`
export const ProducerTopTitle = styled.Text`

font-size: 19px;
font-weight: 500;
letter-spacing: 0.2px;
color: #353535;
margin-top:2;
`

export const ProducerItem = styled.View`
    border-width:0;
    top:19.1%;
    width:89%;
    height:8%;
    background-color:#fff;
    align-self:center;
`
export const ProducerItemInput = styled(Input)`
font-size: 16px;
font-weight: 500;
letter-spacing: 0.2px;
color: rgba(164, 164, 164, 0.9);
`

export const ProducerButton = styled.TouchableOpacity`
  width:100%;
  height: 64px;
  border-top-width:1px;
  border-top-color:#3d3d3d;

  margin-bottom:0px;
  align-self:center;
`
export const ProducerButtonContent = styled.View`
    flex:1;
    flex-direction:row;
    align-items:flex-start;
`
export const ProducerButtonTitle = styled(Text)`
    margin-top:10px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.2px;
    color: rgba(32, 32, 32, 0.9);
`

export const ProducerRight = styled.View`
  flex:1;
  flex-direction:column;
  margin-top:10px;
  
`
export const ProducerRightCount = styled.Text`
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.2px;
  color: rgba(32, 32, 32, 0.9);
  align-self:flex-end;
`

export const RouteButton = styled(Button)`
position:absolute;
top:0;
width:100%;
height:100%;
zIndex:1000;
backgroundColor:#fff;
backgroundColor:#fff;
opacity:0;
`

/////////  FindMaterialDetail

export const ConsumerBigTitle = styled(Text)`
font-size: 24px;
font-weight: bold;
letter-spacing: 0.2px;
color: rgba(27, 27, 27, 0.9);
margin-top: 22px;
    ${p => p.fs && `
        font-size: ${p.fs}px; 
        font-weight: 900;
    `}
    ${p => p.mt && `
        margin-top: ${p.mt}px; 
    `}
      ${p => p.fw && `
        font-weight: ${p.fw}; 
    `}
    
`

export const ConsumerMiddleTitle = styled(Text)`
font-size: 18px;
font-weight: 500;
letter-spacing: 0.2px;
color: rgba(27, 27, 27, 0.9);
margin-top:34px;
`



export const ConsumerContentBox = styled.View`
   flex:1;
   height:auto;
   margin-top:10px;
   justify-content : space-between;
   flex-direction:row;
`
export const ConsumerContentBox2 = styled.View`
   flex:1;
   margin-top:10px;
   height:140px;
   justify-content :flex-start;
   
`

export const DataPicker = styled(Picker)`
   height: 40px;
   width:100%;
`

export const FMConsumerItem = styled(Item)`
    border-width:0px;
    width:100%;
    height:36px;
    background-color:#fff;
    align-self:center;
`

export const FMConsumerItemInput = styled(Input)`
font-size: 16px;
font-weight: 500;
letter-spacing: 0.2px;
color: rgba(164, 164, 164, 0.9);
`

export const AddressButton = styled(Button)`
 width: 100px;
 height:40px;
 border-radius: 4px;
 background-color: #ebebeb;
 elevation:0;
`
export const AddressButtonTitle = styled(Text)`
width:100%;
margin: 0 auto;
font-size: 14px;
letter-spacing: 0.2px;
text-align: center;
color: rgba(27, 27, 27, 0.9);
elevation:0;
`

export const Check = styled(CheckBox)`
    border-width:1px;
    border-color:#dcdcdc;
    background-color:#fff;
    left:0;
`
export const CheckBoxText = styled(Text)`
font-size: 16px;
letter-spacing: 0.2px;
color: rgba(87, 87, 87, 0.9);
    margin-left:7px;
`
export const FMBottomButton = styled.TouchableOpacity`
    margin:99px;
    width: 260px;
    height: 50px;
    border-radius: 4px;
    background-color: #ededed;
    align-self:center;
     justify-content:center;
    align-items:center;
    border:1px solid;
     borderColor:${p => p.bd ? p.bd : '#ffffff'};
`
export const FMBottomButtonTitle = styled(Text)`
    width:230px;
    margin:0 auto;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.6px;
    text-align: center;
    color: '#f6f6f6';
    color: rgba(27, 27, 27, 0.9);
`


//  Preview

export const PrText = styled(Text)`
font-size: 14px;
letter-spacing: 0.2px;
color: rgba(128, 128, 128, 0.9);
`

export const PreBottomButton = styled.TouchableOpacity`
    margin:99px;
    width: 260px;
    height: 50px;
    border-radius: 4px;
    background-color: #ffd400;
    align-self:center;
     justify-content:center;
    align-items:center;
    border:1px solid;
     borderColor:${p => p.bd ? p.bd : '#ffffff'};
`

export const PreBottomButtonTitle = styled(Text)`
    width:230px;
    margin:0 auto;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.6px;
    text-align: center;
    color: rgba(27, 27, 27, 0.9);
`

export const PreBigTitle = styled(Text)`
font-size: 30px;
font-weight: 900;
color: rgba(22, 22, 22, 0.8);
text-align: left;
`

export const PreMidTitle = styled(Text)`

font-size: 16px;
font-weight: 300;
letter-spacing: 0.2px;
color: rgba(66, 66, 66, 0.9);
margin-top:10px;
`

export const PreSmallTitle = styled(Text)`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.1px;
margin-top:10px;
  color: rgba(154, 154, 154, 0.9);
`
export const FinalBottomButton=styled.TouchableOpacity`
margin-top:160px;
width: 260px;
height: 50px;
border-radius: 4px;
background-color: #ffd400;
align-self:center;
 border-radius: 4px;
    justify-content:center;
    align-items:center;
    border:1px solid;
     borderColor:${p => p.bd ? p.bd : '#ffffff'};
`

export const FinalBottomButtonTitle=styled(Text)`
width: 175px;
height:auto;
font-size: 18px;
font-weight: bold;
letter-spacing: 0.6px;
text-align: center;
color: rgba(27, 27, 27, 0.9);
margin:0 auto;
`
export const AddressListBox = styled.View`
   min-height:65;
   width:100%;
   border-bottom-width:1px;
   border-bottom-color:rgba(128, 128, 128, 0.9);
   margin-bottom:5%;
`

export const AddressListBoxtTitle1 = styled.Text`
font-size: 15px;
font-weight: 500;
letter-spacing: 0.2px;
color: rgba(27, 27, 27, 0.9);
margin-bottom:8px;
overflow:hidden;
`

export const AddressListBoxtTitle2 = styled.Text`
font-size: 14px;
font-weight: 300;
letter-spacing: 0.2px;
color: rgba(128, 128, 128, 0.9);
margin-bottom:10px;
align-self:center;
overflow:hidden;
`

export const AddressListBoxtTitle3 = styled.Text`
font-size: 11px;
font-weight: 300;
letter-spacing: 0.2px;
color: rgba(128, 128, 128, 0.9);
margin-bottom:10px;
border-width:1px;
padding:1.5px;
border-color:rgba(128, 128, 128, 1);
margin-right:5px;
align-self:center;
`
