import React, { Component } from 'react';
import {Button,Text,Label,CheckBox} from 'native-base';
import styled from 'styled-components/native';

export const LoginButton = styled.TouchableOpacity`
    width:100%;
    height:46px;
    background-color:${p=>p.bc};
    margin-bottom:8px;
    border-radius: 4px;
    justify-content:center;
    align-items:center;
`

export const SNSButton = styled.TouchableOpacity`
    width:100%;
    height:46px;
    background-color:${p=>p.bc};
    margin-bottom:8px;
    border-radius: 4px;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
`
export const ButtonLable = styled(Text)`
   color : ${p=>p.color};
   font-weight: ${p=>p.fw};
   letter-spacing: ${p=>p.ls};
   ${p => p.size && `
        font-size: ${p.size}px; 
        margin-top: 2px;
    `}
`
export const Title = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.3px;
    text-align: left;
    color: #212121;
    margin-top:5px;
`

export const BigTitle = styled(Text)`
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 0.3px;
    text-align: left;
    color: rgba(22, 22, 22, 0.8);;
    margin-top:35px;
`

export const FormTitle = styled.View`
    width:100%;
    margin-top:43px;
    padding-bottom:7px;
    border-bottom-width:1px;
    border-bottom-color: #d8d8d8;
`

export const FormTitleText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.4px;
    color: rgba(28, 28, 28, 0.7);
`

export const InputLable = styled(Label)`
       color: rgba(28, 28, 28, 0.7);
       letter-spacing: 0.4px;
       font-size: 16px;
       margin-bottom:10px;
`
export const Check = styled(CheckBox)`
    border-width:1px;
    border-color:#dcdcdc;
    background-color:#fff;
    left:0;
`
export const CheckBoxText = styled(Text)`
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.4px;
    color: rgba(28, 28, 28, 0.7);
    margin-left:7px;
`
export const FindIdButton = styled(Button)`
    height:22px;
    padding:0;
`
export const FindIdButtonLable = styled(Text)`
    letter-spacing: 0.4px;
    color: rgba(28, 28, 28, 0.7);
    font-size: 15px;
    font-weight: 500;
    padding:0;
`

export const Line = styled.View`
    width:100%;
    border-bottom-width:1px;
    border-bottom-color: #d8d8d8;
    margin-top:40px;
    margin-bottom:40px;
   ${p => p.custom && `
      margin-top:${p.custom}px;
    margin-bottom:${p.custom}px;
    `}
`

