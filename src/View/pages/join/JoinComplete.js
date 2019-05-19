import React,{Component} from 'react';
import {View, Dimensions, StyleSheet, SafeAreaView} from 'react-native';
import {Container, Button, Text, Content} from 'native-base';
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs';
import {connect} from 'react-redux'
import {LoginAction} from 'src/Redux/Actions/user.action'
import {Center, HeaderTitle, LeftButton, MyHeader} from "../../atoms/requestList";
import {Title} from "../../atoms/login/LoginPageComponents";
import {LoginContainerText, LoginTitle} from "../../atoms";
import {LoginContainerTop} from "../../templates";
import {ConsumerBigTitle} from "../../atoms/findMaterials";


 class JoinComplete extends Component{

     static navigationOptions={
         header:null
     }

    constructor(props){
        super(props)
        let {width}=Dimensions.get('window')
        this.view_width = width*0.88;


        this.email=null
        this.password=null
    }

     movePage =  (url) => {

         this.props.navigation.navigate(url, {page:'뒤로가기'});
     }


    render(){
        return(

        <SafeAreaView style={{flex:1,backgroundColor:'#fff',position:'relative'}}>
            <Container style={styles.container}>

                <View style={{
                    marginTop:90,
                    flex:2,
                    width:'100%',
                    alignItems:'flex-start',
                    paddingLeft:20,
                }}>
                    <SvgUri
                        style={{marginLeft:-10}}
                        width="250"
                        height="40"
                        svgXmlData={Svg.magam_logo}
                    />
                    <Title>자재 찾아드림</Title>


                    <ConsumerBigTitle fs={26} fw={900} mt={5}>회원가입 완료</ConsumerBigTitle>

                    <LoginContainerText color={'rgba(66,66,66,0.9)'} marginTop={5}>
                        MAGAM. 서비스에 가입신청이 완료되었습니다.{`\n`}
                        사업자등록증 인증에는 최대 2영업일이 소요됩니다.{`\n`}{`\n`}

                        인증 완료 후, 입력한 연락처로 안내 메시지가 발송됩니다.{`\n`}{`\n`}

                        MAGAM. 서비스를 통해 자재를 찾는 시간을 절약하고,{`\n`}
                        더 많은 시간을 더 중요한 일에 사용하세요.


                    </LoginContainerText>


                </View>


                  <View style={{flex:1,width:"100%",justifyContent:'flex-start',alignItems:'center', marginTop:100}}>
                      <View>
                          <Button style={{width:260,height:50,justifyContent:'center',backgroundColor:'#f6f6f6'}}
                                  onPress={()=>this.movePage('LoginInput')}
                          >
                              <Text style={{color:'rgba(27, 27, 27, 0.9)',fontWeight:'600'}}>로그인</Text>
                          </Button>
                      </View>
                  </View>
            </Container>
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
}) 


function mapDispatchToProps(dispatch){
    return {
        onLogin : (email, password)=> dispatch(LoginAction(email,password)),
        setUserType :(type)=>dispatch(SET_USER_TYPE(type)),
        setUserToken :(token)=>dispatch(SET_USER_TOKEN(token))
    }
}

function mapStateToProps(state){
  return {
     value : state.LoginReducer.value,
     error : state.LoginReducer.error,
     userType : state.UserTypeReducer.type,
     token : state.UserTypeReducer.token
  }
}

export default JoinComplete = connect(
  mapStateToProps, mapDispatchToProps
)(JoinComplete)
