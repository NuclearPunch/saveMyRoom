import React,{Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {LoginContainer,
        LoginContainerTop,
        LoginContainerCenter,
        LoginContainerBottom
} from 'src/View/templates';

import {LoginContainerText
,LoginContainerButton,
LoginContainerButtonText, LoginTitle
} from 'src/View/atoms'

export default class LoginView extends Component{

    static navigationOptions={
        header:null
    }
    constructor(props){
        super(props)
    }

    movePage = async (url) => {
        this.props.navigation.navigate(url, {page:'로그인'});
    }

    render(){
        return(


           <LoginContainer>



               <LoginContainerTop>
                  <View style={{borderBottomWidth:2, borderBottomColor:'#202020', width:50, marginBottom:20, }} />
                  <LoginTitle >자취방을 부탁해!</LoginTitle>
                 
                  <LoginContainerText color={'rgba(66,66,66,0.9)'} marginTop={30}>자취방을 부탁해를 통해서 집을 안전하게 보호하세요!</LoginContainerText>
                  <LoginContainerText color={'rgba(66,66,66,0.9)'} >침입자 경고알림을 받아보세요!</LoginContainerText>
                  <LoginContainerText color={'rgba(66,66,66,0.9)'} >실시간으로 내부상황을 모니터링하고 카메라를 조정할 수 있습니다.</LoginContainerText>


              </LoginContainerTop>

              <LoginContainerCenter>

              </LoginContainerCenter>

              <LoginContainerBottom>
                 <View>

                    <LoginContainerButton bc={'#f6f6f6'}
                      onPress={()=>this.movePage('LoginInput')}
                    >
                        <LoginContainerButtonText>로그인</LoginContainerButtonText>
                    </LoginContainerButton>
                    <LoginContainerButton marginTop={10} bc={'#ffffff'} bd={'#979797'}
                      onPress={()=>this.movePage('JoinInput')}
                    >
                        <LoginContainerButtonText>회원가입</LoginContainerButtonText>
                    </LoginContainerButton>
                </View>

              </LoginContainerBottom>
              
           </LoginContainer>
           
        )
    }
}