
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';


export class RadioIOS extends React.Component{

    render(){
        return(
            <>
               <TouchableOpacity
                 onPress={()=>{
                    this.props.onClick()
                 }}
               >
                  <Icon 
                    style={{fontSize:this.props.size}}
                    type='Ionicons'
                    name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'}
                  />
               </TouchableOpacity>
            </>
        )
    }
}