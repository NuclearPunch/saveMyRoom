import React, { Component } from 'react';
import {Button,Text,Label,CheckBox} from 'native-base';
import styled from 'styled-components/native';

export const MidButton = styled(Button)`
    width:125px;
    height:46px;
    background-color:${p=>p.bc};
    border-radius: 4px;
    justify-content:center;
    margin: 0 5px;
`


export const LongButton = styled.TouchableOpacity`

 
    width:300;
    height:50;
    justifyContent:center;
    align-items:center;
     background-color:${p=>p.bc};
    border:1px solid;
     border-radius: 4px;
    borderColor:${prpo => prpo.bd ? prpo.bd : '#ffffff'};

`
export const CustomText = styled(Text)`
   color : ${p=>p.color};
   font-weight: ${p=>p.fw};
    font-size: ${p=>p.size}px;
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
    font-size: 11px;
    font-weight: 300;
    letter-spacing: 0.4px;
    color: rgba(87, 87, 87, 0.9);
    margin-left:7px;
`


export const JoinSelector = styled(Button)`
    width:175px;
    height:50px;
    background-color: #f6f6f6;
    border-radius: 4px;
    margin: 5px 0;
 
    justify-content: center;
    flex-direction:column;

`