import React, { Component } from 'react';
import styled from 'styled-components/native';
import {Button} from 'native-base';

export const DateTitle = styled.Text`
   font-size: 20px;
   font-weight: bold;
   letter-spacing: 0.2px;
   color: rgba(44, 44, 44, 0.9);
`

export const Content = styled.View`
   flex:1
   width:88%;
   alignSelf:center;
   paddingBottom:19px;
   borderBottomWidth:1px;
   borderBottomColor:#e5e5e5;
`

export const BigTitle = styled.Text`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: rgba(27, 27, 27, 0.9);
    paddingBottom:5;
`

export const SmallTitle = styled.Text`
    font-size: 12px;
    letter-spacing: 0.1px;
    color: rgba(80, 80, 80, 0.9);
`

export const NoneTitle = styled.Text`
    marginLeft:20;
    marginTop:40;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 0.3px;
    color: rgba(22, 22, 22, 0.8);
`




export const NoneButton = styled.TouchableOpacity`
width: 200px;
height: 50px;
border-radius: 4px;
background-color: #f6f6f6;
border-width:1px;
border-color:#979797;
margin-top:15px;
margin-left:20px;
justify-content:center;
    align-items:center;
`

export const NoneButtonText = styled.Text`
 width:100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(27, 27, 27, 0.9);
`

export const CamalaButton = styled.TouchableOpacity`
    width:100%;
    height:44px;
    border-radius: 4px;
    background-color: #f1f1f1;
    justifyContent:flex-start;
    align-items:center;
    flex-direction:row;
`

export const CamalaButtonTitle = styled.Text`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: rgba(128, 128, 128, 0.9);
    marginLeft:9;
    flex:1;
`