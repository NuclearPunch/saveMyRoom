import React from 'react';
import {Button} from 'native-base';
import {View,Text} from 'react-native';
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs';
export default class MButton extends React.Component{

    static defaultProps = {
        onPress : ()=>{},
        title : '',
        isClicked : false
    }
    
    render(){
        return(
            <>
            <Button onPress={()=>{
                this.props.onPress()
            }} full light style={{width:'100%',borderBottomWidth:1,borderBottomColor:'#e9e9e9',backgroundColor:'#fff'}}
            >

            <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',backgroundColor:'#fff'}}>
              <Text style={{marginLeft:20,color:this.props.isClicked ? 'rgba(42, 42, 42, 0.9)':'#bdbdbd'}}>{this.props.title}</Text>
              {
                this.props.isClicked ? 
                  <View style={{marginRight:20}}>
                    <SvgUri 
                        width="15"
                        height="15"
                        svgXmlData={Svg.small_checked}
                    />
                 </View> : <></>
              }
            </View>
                
            </Button>
            
            </>
        )
    }
}