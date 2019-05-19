import React,{Component} from 'react';
import {View, Alert, ScrollView,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Icon,Text,} from 'native-base';
import Util from 'src/Utils';


class Menu2 extends Component{

    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#f7f7f7',
          shadowRadius: 0,
          shadowOffset: {
              height: 0,
          },
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          elevation:0
        }
      }

    constructor(props){
        super(props);

        this.state = {
          
        }


        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {

            }
        );
        
    }


    async componentDidMount(){

       
       // let fcmToken = await firebase.messaging().getToken();
       
    }


    componentWillUnMount(){
        this.willFocusSubscription.remove();
    }


    movePage(url, title){
        this.props.navigation.navigate(url, {page:'뒤로가기', title});
    }

  

    render(){
        return(
            <View><Text>m2</Text></View> 
        )
    }
}


function mapStateToProps(state){

    return {
    
    }
}


function mapDispatchToProps(dispatch){
    return {
     
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Menu2)