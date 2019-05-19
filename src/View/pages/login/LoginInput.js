import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Alert, AsyncStorage, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {Container, Content, Form, Item, Input, Spinner, Button, Icon, Row} from 'native-base';
import {
    LoginButton, ButtonLable,
    Title, FormTitle, FormTitleText, InputLable, Check, CheckBoxText,
    FindIdButton, FindIdButtonLable, Line, SNSButton
} from 'src/View/atoms/login/LoginPageComponents'
import {
    LoginAction,
    SET_USER_TYPE,
    SET_USER_TOKEN,
    SET_USER_ID,
    SET_USER_FLAG,
    SET_USER_COMPANY_NAME
} from 'src/Redux/Actions/user.action'
import {connect} from 'react-redux'
import {SpinnerContainer} from 'src/View/templates'
import _ from 'lodash';
import {Center, HeaderTitle, LeftButton, MyHeader} from "../../atoms/requestList";
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs';
import Util from "src/Utils";


class Login extends Component {


    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        let {width} = Dimensions.get('window');
        this.view_width = width * 0.88;

        this.state = {
            spinner: false,
            checked: true,
        }

        this.email = null;
        this.password = null;
        this.isSns = false;
    }

    loginSucess = async () => {
        if (this.props.value.user[0].type === 0) {
            Alert.alert("일반 계정으로는 로그인 하실 수 없습니다.");
            return false;
        }
        let userFlag = 1;
        if ([0, 1, 4].indexOf(Number.parseInt(this.props.value.user[0].type)) > -1) {
            userFlag = 1;
        } else {
            userFlag = 2;
        }

        if (this.state.checked) {

            this.props.setUserType(this.props.value.user[0].type);
            this.props.setUserToken(this.props.value.token);
            this.props.setUserId(this.props.value.user[0]._id);
            this.props.setUserFlag(userFlag);
            this.props.setUserCompanyName(this.props.value.user[0].companyName);
            await AsyncStorage.setItem('userType', String(this.props.value.user[0].type));
            await AsyncStorage.setItem('userId', String(this.props.value.user[0]._id));
            await AsyncStorage.setItem('token', this.props.value.token);
            await AsyncStorage.setItem('userFlag', String(userFlag));
            await AsyncStorage.setItem('companyName', String(this.props.value.user[0].companyName));
            // await AsyncStorage.setItem('offerid',' ')

            this.props.navigation.navigate('App')
        } else {
            this.props.setUserType(this.props.value.user[0].type);
            this.props.setUserToken(this.props.value.token);
            this.props.setUserId(this.props.value.user[0]._id);
            this.props.setUserFlag(userFlag);
            this.props.setUserCompanyName(this.props.value.user[0].companyName);
            // await AsyncStorage.setItem('offerId',' ')

            this.props.navigation.navigate('App')
        }

        Chat.socket.emit('init', {
            id: this.props.value.user[0]._id,
            offerId: '',
            fcm: this.state.fcmToken
        })
    }

    loginReponseHandle = () => {
        if (this.props.error) {
            Alert.alert(`로그인 실패: ${this.props.error}`)
        } else {
            this.loginSucess()
        }
        this.setState({
            spinner: false,
        })
    }

    // getFcmToekn = async () => {
    //     this.setState({
    //         fcmToken: await firebase.messaging().getToken(),
    //     });


    //     this.LoginHandle();


    // };

   // onDebounce = _.debounce(this.getFcmToekn, 500);

    LoginHandle = () => {

        if (this.requireInfAvailability()) {

            this.setState({
                spinner: true
            })


            this.props.onLogin(this.email, this.password, this.state.fcmToken, this.isSns)
                .then(this.loginReponseHandle)
                .catch(res => {
                    Alert.alert(`로그인 실패 : ${res}`)
                    this.setState({
                        spinner: false
                    })
                })
        }
    }

    requireInfAvailability = () => {
        if (this.isSns) {
            return true
        } else {
            if (!this.email) {
                Alert.alert('이메일을 입력해주세요');
                return false
            } else if (!this.password) {
                Alert.alert('비밀번호를 입력해주세요');
                return false
            } else {
                return true
            }
        }

    }

    staySignedIn = () => {
        this.setState((pre) => ({
            checked: !pre.checked
        }))
    };


    movePage = async (url, data = {page: '로그인'}) => {
        this.props.navigation.navigate(url, data);
    };



    isExistsUser(data, flag) {

        fetch(`${Util.baseUrl}/api/user/user?email=${data.email}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                if (res.status != 200) {
                    this.movePage('SelectType', {
                        isSns: true,
                        email: data.email,
                        joinCode: data.id,
                        flag: flag,
                    })
                }

                this.checkUserJoinFlag(res.user[0], flag);

            }).catch(err => {
            //console.error(err)
        })
    }

    checkUserJoinFlag(user, flag) {

        if (user.flag === flag) {
            this.isSns = true;
            this.onDebounce();
        } else {
            let msg = '';
            switch (user.flag) {
                case 'interiorbrothers':
                    msg = "일반";
                    break;
              
            }

            Alert.alert(`로그인 안내`, `해당 이메일은 ${msg} 회원가입을 통해서 가입되었습니다.\n ${msg} 로그인을 통해 진행부탁드립니다.`);

            return false;
        }

    }


    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff', position: 'relative'}}>
                <Container style={styles.container}>
                    <MyHeader>
                        <LeftButton>
                            <Button style={{marginLeft: 10}}
                                    onPress={_ => {
                                        this.props.navigation.pop()
                                    }}
                                    iconLeft transparent>
                                <SvgUri

                                    width="20"
                                    height="20"
                                    svgXmlData={Svg.left_arrow}
                                />
                            </Button>

                        </LeftButton>


                        <Center>
                            <HeaderTitle style={{width: '100%'}}>로그인</HeaderTitle>
                        </Center>

                        <View
                            style={{width: 40, height: '100%'}}>
                        </View>
                    </MyHeader>

                    <Content style={{width: this.view_width}} showsVerticalScrollIndicator={false}>

                        <View style={{marginTop: 46, }}>
                          <Text style={{fontSize:40, fontWeight:'600', color:'#1f1f1f'}}>자취방을 부탁해!</Text>
                        </View>
                        
                        <Form>

                            <InputLable style={{marginTop: 45}}>이메일</InputLable>
                            <Item bordered regular={true} style={{height: 44,}}>
                                <Input onChangeText={value => this.email = value} autoCapitalize='none'/>
                            </Item>

                            <InputLable style={{marginTop: 18}}>비밀번호</InputLable>
                            <Item bordered regular={true} style={{height: 44}}>
                                <Input secureTextEntry={true} onChangeText={value => this.password = value}/>
                            </Item>

    
                            <LoginButton bc='#f6f6f6' style={{marginTop: 33}} onPress={this.onDebounce}>
                                <ButtonLable color='rgba(27, 27, 27, 0.9)'
                                             ls='0.6' fw={900} fs={18}
                                > 로그인 </ButtonLable>
                            </LoginButton>

                        </Form>

                    </Content>

                    <SpinnerContainer>
                        {
                            this.state.spinner ? (
                                <Spinner color='#ffd400'/>
                            ) : (<></>)
                        }
                    </SpinnerContainer>
                </Container>
            </SafeAreaView>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    }
})


function mapDispatchToProps(dispatch) {
    return {
        onLogin: (email, password, fcmToken, isSns) => dispatch(LoginAction(email, password, fcmToken, isSns)),
        setUserType: (type) => dispatch(SET_USER_TYPE(type)),
        setUserToken: (token) => dispatch(SET_USER_TOKEN(token)),
        setUserId: (userId) => dispatch(SET_USER_ID(userId)),
        setUserFlag: (flag) => dispatch(SET_USER_FLAG(flag)),
        setUserCompanyName: (nm) => dispatch(SET_USER_COMPANY_NAME(nm)),
    }
}

function mapStateToProps(state) {
    return {
        value: state.LoginReducer.value,
        error: state.LoginReducer.error,
        userType: state.UserTypeReducer.type,
        token: state.UserTypeReducer.token,
        userId: state.UserTypeReducer.userId,
        userFlag: state.UserTypeReducer.userFlag,
        companyName: state.UserTypeReducer.companyName,
    }
}

export default Login = connect(
    mapStateToProps, mapDispatchToProps
)(Login)
