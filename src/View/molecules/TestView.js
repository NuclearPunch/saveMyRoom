import React from 'react';
import {View, Text} from 'react-native';



export default class TestView extends React.Component{
    


    constructor(props){
        super(props)

    }


    render(){
        return(
            <View>
                <Text>
                    {'숫자:'} {this.props.test}
                </Text>

            </View>
        )
    }
}