import React,{Component} from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Alert,
    SafeAreaView,
    Text,
    TouchableHighlight,
    ScrollView,
    Modal, Image,TouchableOpacity
} from 'react-native';
import {Container, Content, Form, Item, Input, Spinner, Button, Icon} from 'native-base';
import {MidButton, CustomText, InputLable, Check, CheckBoxText, LongButton,} from 'src/View/atoms/join/PageComponents'

import {connect} from 'react-redux'
import {SET_USER_META_TYPE, JoinAction, SET_JOIN_DATA} from 'src/Redux/Actions/user.action'
import {Center, HeaderTitle, LeftButton, MyHeader} from "../../atoms/requestList";
import {ConsumerBigTitle} from "../../atoms/findMaterials";

import {Line} from "../../atoms/login/LoginPageComponents";
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs';
import Util from "../../../Utils";


let headerData = {};
class JoinInput extends Component{

    static navigationOptions=(({navigation, navigationOptions})=>{
        const { params } = navigation.state;
        headerData = params;
        return {
            header:null
        }
    });



    constructor(props){
        super(props);
        let {width}=Dimensions.get('window');
        this.view_width = width*0.88;
        this.state={
            spinner : false,
            agree1 : false,
            agree2 : false,
            agreeAll : false,
            news_agree : false,
            modalVisible : false,
        }

        this.email=null;
        this.companyName = null;
        this.password=null;
        this.password_re = null;

        this.userFlag = 1;
        if(['expert'].indexOf(this.props.userType) > -1){
            this.userFlag = 1;
        }else{
            this.userFlag = 2;
        }

        this.headerData = headerData;

        if(headerData.isSns){
            this.email = headerData.email;
            this.password = headerData.joinCode;
            this.password_re = headerData.joinCode;
        }
    }


    movePage =  (url) => {

        this.props.navigation.navigate(url, headerData);
        this.setState({
            spinner : false
        })
    }



     joinSuccess=async ()=>{

         if(this.props.value.status === 409){
             return Alert.alert(`회원 가입 알림`, '이미 가입된 계정입니다.')
         }else{
             const specialty = this.props.specialty || null;
             this.props.setUserMetaType(this.props.userType, this.props.value.userInfo, specialty);
             this.movePage('BizInfoInput');
         }


     }

     joinReponseHandle=()=>{
         if(this.props.error){
             Alert.alert(`회원 가입 알림`, `${this.props.error}`)
         }else{
             this.joinSuccess()
         }
         this.setState({
             spinner : false,
         })
     }


     requireInfAvailability = ()=>{

         if (!this.email || !/^[-a-z0-9~!$%^&*_=+}{'?]+(.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(c.[-a-z0-9_]+)*.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(this.email)) {
             return Alert.alert('잘못된 이메일 주소 형식입니다.');
         }


         if(!this.password){
             return Alert.alert("비밀번호를 입력해주세요.");
         }
         if(this.password.length < 8){
             return Alert.alert("비밀번호는 최소 8자 이상 입력해주세요.");
         }
         if(!this.password_re){
             return Alert.alert("비밀번호확인을 입력해주세요.");
         }
         if(this.password !== this.password_re){
             return Alert.alert("비밀번호가 일치하지 않습니다.");
         }
/*

         if(!this.sms || this.sms === '' || !this.isPhoneNumber(this.sms)){
             alert('핸드폰 번호를 입력해주세요')
             return
         }

         if(!/^[0-9]{10}$/i.test(this.sms) && !/^[0-9]{11}$/i.test(this.sms)){
             alert('핸드폰 번호를 정확히 입력해주세요')
             return
         }
*/

         if( !this.state.agree1 || !this.state.agree2 ){
             return Alert.alert('이용약관에 대한 동의는 필수 항목입니다.');
         }


         return true;



     }

     joinHandle = (type) => {
        let url = '';

         if(type === 1){
            if(this.requireInfAvailability()){
                this.setState({
                    spinner : true
                })

                const news_agree = this.state.news_agree ? '1' : '0';

                const specialty = this.props.specialty || null;

                let params = {type: this.props.userType, userId: null,  specialty: specialty, email: this.email, password: this.password, news_agree: news_agree};

                if(headerData.isSns){
                    params.isSns = true;
                    params.joinCode = headerData.joinCode;
                    params.flag = headerData.flag;
                }

                this.props.setJoinData(params);
                this.movePage('BizInfoInput');
            /*
              this.props.onJoin(this.email, this.companyName, this.password, this.props.userType, news_agree)
                    .then(this.joinReponseHandle)
                    .catch(resone =>{
                        Alert.alert(`가입 실패 : ${resone}`)
                        this.setState({
                            spinner : false
                        })
                    })

                    */
            }


        }else{
            url = 'SelectType';
            this.movePage(url);
        }


     };

     checkedAgree = (kind) =>{
         if(kind === 1){
             this.setState((pre)=>({
                 agree1: !pre.agree1,
                 agreeAll : false,
             }))
         }
         if(kind === 2){
             this.setState((pre)=>({
                 agree2: !pre.agree2,
                 agreeAll : false,
             }))
         }
         if(kind === 3){
             this.setState((pre)=>({
                 news_agree: !pre.news_agree,
                 agreeAll : false,
             }))
         }
         if(kind === 4){
             this.setState((pre)=>({
                 agreeAll: !pre.agreeAll,
                 agree1: !pre.agreeAll,
                 agree2: !pre.agreeAll,
                 news_agree: !pre.agreeAll,
             }))

         }

     };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    };

    isExistsUser= async (type) => {
        if(this.requireInfAvailability()){
            const result = await new Promise((resolve, reject) => {
                fetch(`${Util.baseUrl}/api/user/user?email=${this.email}`)
                    .then(res => res.json())
                    .then((res) => {
                        console.log(res);
                        if (res.status != 200) {
                            this.joinHandle(type);
                            resolve(true);

                        }else{
                            return Alert.alert("회원 가입 알림","이미 가입된 계정입니다.");
                        }

                    }).catch(err => {
                    //console.error(err)
                    reject(err);
                })
            });
        }





    }

    render(){
        return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff',position:'relative'}}>
            <Container style={styles.container}>
                <MyHeader>
                    <LeftButton>
                        <Button style={{marginLeft:10}}
                                onPress={_=>{
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
                        <HeaderTitle style={{width:'100%'}}>기본 정보 입력</HeaderTitle>
                    </Center>

                    <View
                        style={{width:40,height:'100%'}}>
                    </View>
                </MyHeader>
              <Content style={{width:this.view_width, marginTop:25,}} showsVerticalScrollIndicator={false}>
                  <ConsumerBigTitle fs={29}>{
                       '회원가입' 
                  }</ConsumerBigTitle>

                <Form>
                 <InputLable style={{marginTop:35}}>이메일 주소(계정으로 사용)</InputLable>
                 <Item bordered regular={true} style={{height:44}}>
                        <Input onChangeText={ value=>this.email=value} value={this.email} autoCapitalize='none'/>
                 </Item>
                    {!this.headerData.isSns &&
                        <>
                            <InputLable style={{marginTop:18}}>비밀번호</InputLable>
                            <Item bordered regular={true} style={{height:44}}>
                                <Input secureTextEntry={true} onChangeText={value=>this.password=value} />
                            </Item>
                            <InputLable style={{marginTop:18}}>비밀번호 확인</InputLable>
                            <Item bordered regular={true} style={{height:44,}}>
                                <Input secureTextEntry={true} onChangeText={value=>this.password_re=value}/>
                            </Item>
                        </>

                    }

                <View style={{marginTop:45,flexDirection:'row',justifyContent:'center'} }>
                    <LongButton onPress={() => {this.isExistsUser(1)}} bc='#f6f6f6'>
                        <CustomText   color='rgba(27, 27, 27, 0.9)'
                                      size='18' fw='bold'>가입하기</CustomText></LongButton>
                </View>



                </Form>
                
              </Content>

              <View style={{position:'absolute',top:-44,height:'100%',flex:1,justifyContent:'center',alignContent:'center'}}>
                {
                    this.state.spinner? (
                        <Spinner color='#ffd400' />
                    ):(<></>)
                } 
              </View>


            <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.modalVisible}
                transparent={true}
            >
                <SafeAreaView  style={{position: 'relative', height: '100%', flex:1,backgroundColor:'rgba(0,0,0,0.4)', }}   >

                    <TouchableOpacity
                        style={{position:'absolute',height:'100%',width:'100%', zIndex:500,backgroundColor:'rgba(0,0,0,0)'}}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text></Text>
                    </TouchableOpacity>

                    <View
                        style={{position:'absolute',bottom:0, zIndex:600, width:'100%', height: '100%', backgroundColor:'#fff'}}
                    >

                        <MyHeader>

                            <LeftButton>
                                <Button style={{marginLeft:15}}
                                        onPress={_=>{
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                        iconLeft transparent>
                                    <SvgUri

                                        width="20"
                                        height="20"
                                        svgXmlData={Svg.X}
                                    />
                                </Button>

                            </LeftButton>


                            <Center>
                                <HeaderTitle style={{width:'100%'}}>이용 약관 확인</HeaderTitle>
                            </Center>

                            <View
                                style={{width:40,height:'100%'}}>
                            </View>
                        </MyHeader>

                        <View style={{width:'100%', padding:20, flex:1,
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',}}>

                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View style={{ flexDirection:'row', width:'100%'}}>
                                <ConsumerBigTitle onPress={() => {this.checkedAgree(4)}} style={{flex:1,}} fs={16} fw={600} mt={30}>
                                    이용약관, 개인정보 수집 및 이용,{`\n`}
                                    위치정보 이용약관(선택),{`\n`}
                                    프로모션 안내 메일 수신(선택)에{`\n`}
                                    모두 동의합니다
                                </ConsumerBigTitle>
                                <Check  style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop:50,}} checked={this.state.agreeAll} onPress={() => {this.checkedAgree(4)}}/>
                            </View>


                            <Line custom={30}></Line>


                                <View style={{ flexDirection:'row', width:'100%'}}>
                                    <ConsumerBigTitle onPress={() => {this.checkedAgree(1)}} style={{flex:1,}} fs={16} fw={500} mt={1} >
                                        MAGAM. 이용약관 동의 <Text  style={{color:'rgba(255, 52, 52, 0.9)', fontSize:12,}}>(필수)</Text>
                                    </ConsumerBigTitle>
                                    <Check  style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop:2,}} checked={this.state.agree1} onPress={() => {this.checkedAgree(1)}}/>
                                </View>

                               

                                <View style={{ flexDirection:'row', width:'100%', marginTop:20,}}>
                                    <ConsumerBigTitle onPress={() => {this.checkedAgree(2)}} style={{flex:1,}} fs={16} fw={500} mt={1} >
                                        MAGAM. 개인정보 수집 이용에 대한 동의 <Text  style={{color:'rgba(255, 52, 52, 0.9)', fontSize:12,}}>(필수)</Text>
                                    </ConsumerBigTitle>
                                    <Check  style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop:2,}} checked={this.state.agree1} onPress={() => {this.checkedAgree(2)}}/>
                                </View>


                                <View style={{ flexDirection:'row', width:'100%', marginTop:20,}}>
                                    <ConsumerBigTitle onPress={() => {this.checkedAgree(3)}} style={{flex:1,}} fs={16} fw={500} mt={1} >
                                        MAGAM. 뉴스레터 동의 <Text  style={{color:'rgba(180, 180, 180, 0.8)', fontSize:12,}}>(선택)</Text>
                                    </ConsumerBigTitle>
                                    <Check  style={{ alignItems: 'flex-end', justifyContent: 'flex-end', marginTop:2,}} checked={this.state.agree1} onPress={() => {this.checkedAgree(3)}}/>
                                </View>

                                <View   style={styles.viewBox}>
                                    <ScrollView style={{ }}>
                                        <Text>{`\n  인테리어브라더스 및 \n  MAGAM.의 뉴스레터를 구독합니다.`}

                                        </Text>
                                    </ScrollView>

                                </View>

                            </ScrollView>

                        </View>





                    </View>


                </SafeAreaView>
            </Modal>
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
    },
    viewBox: {
        marginTop:10,
        borderWidth:1,
        borderColor:'#dcdcdc',
        borderRadius:4,
        width:'100%',
        height:130
    }
})


function mapStateToProps(state){

    return {
        value : state.CommonReducer.value,
        error : state.CommonReducer.error,
        userType : state.UserMetaReducer.type ,
        userId : state.UserMetaReducer.userId ,
        specialty : state.UserMetaReducer.specialty ,
        joinData : state.JoinDataReducer.data,
    }
}


function mapDispatchToProps(dispatch){
    return {
        onJoin : (email, companyName, password, type, news_agree) => dispatch(JoinAction({email, companyName, password, type, news_agree})),
        setUserMetaType :(type, userId, specialty)=>dispatch(SET_USER_META_TYPE(type, userId, specialty)),
        setJoinData : (data) => dispatch(SET_JOIN_DATA(data)),
    }
}


export default JoinInput = connect(
  mapStateToProps, mapDispatchToProps
)(JoinInput)
