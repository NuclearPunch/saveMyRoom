import React,{Component,createRef} from 'react';
import {Alert,StyleSheet,Modal,TouchableOpacity,Text,View} from 'react-native';
import InputPicker from './InputPickerAndroid'


export const InputPickerWrapper = React.forwardRef((props,ref)=>{
       
    const itemList = props.list.map((c)=>{
        return {lable:c.categoryName,value:c}
    })
 
 return (<InputPicker 
            pickerList={itemList} 
            ref={ref}
            enabled = {true}
            width={props.width}
         />
        )
  }
)
