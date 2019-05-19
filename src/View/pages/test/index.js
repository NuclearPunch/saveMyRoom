import React,{Component} from 'react';
import {View, Alert, ScrollView,TouchableOpacity, WebView} from 'react-native';
import {Page,ConsumerBottomItem,ConsumerBottomItemInput,
        BottomBox,ProducerTopTitle,ProducerTop,
        ProducerButton,ProducerButtonTitle, 
        ProducerButtonContent,
        ProducerRight,ProducerRightCount,BottomBoxRightContent,
        BottomBoxLeftContent,BottomBoxRightContentCount,ProduceCenter,
} from 'src/View/atoms/findMaterials';
import {connect} from 'react-redux';
import {Icon,Text,} from 'native-base';
import { showTabBar, ShowTabRedDot,} from 'src/Redux/Actions/common.action';
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs'
import Moment from "moment";
import Util from 'src/Utils';

import WebViewFull from 'react-native-android-fullscreen-webview-video';

class FindMaterials extends Component{

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
            spinner: false,
        }


        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                this.props.showTabBar();

            }
        );

        console.log(props);
        
    }


    async componentDidMount(){

    }

  
    componentWillUnMount(){
       
        this.willFocusSubscription.remove();
    }



 
    movePage(url, title){
        this.props.navigation.navigate(url, {page:'뒤로가기', title});
    }

    moveCamera(type){
        let flag = '';
        switch (type) {
            case 'up':
                flag = 'uptilt'
                break;
            case 'down':
                flag = 'downtilt'
                break;
            case 'left':
                flag = 'leftpan'
                break;
            case 'right':
                flag = 'rightpan'
                break;
                                
            default:
                break;
        }
      //  Alert.alert(`${Util.laspUrl}/${flag}/1`);
        fetch(`${Util.laspUrl}/${flag}/1`)
        .then(res => res.json())
        .then((res) => {
            console.log(res);
    

        }).catch(err => {
        //console.error(err)
        reject(err);
    })
    }

  


    render(){
        return(
            <>
                        
               <Page>
                        

                <ProducerTop> 
                    <View style={{marginTop: 26, }}>
                          <Text style={{fontSize:40, fontWeight:'600', color:'#1f1f1f'}}>자취방을 부탁해!</Text>
                        </View>
                      
                </ProducerTop>
                    
               
                <ProduceCenter style={{marginTop:-70, paddingBottom:40}}>
                    <WebViewFull  source={{uri: 'http://192.168.0.102:8080/?action=streaming'}}/>
              
                    <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
                      <View style={{paddingLeft:75, paddingBottom: 30 }}>
                          <TouchableOpacity onPress={()=>this.moveCamera('up')}>
                            <SvgUri
                            width="50"
                            height="50"
                            svgXmlData={Svg.up_arrow}
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',  }}>
                            <View style={{paddingRight:100}}>
                            <TouchableOpacity onPress={()=>this.moveCamera('left')}>
                                <SvgUri
                                width="50"
                                height="50"
                                svgXmlData={Svg.left_arrow}
                                />
                            </TouchableOpacity>
                            </View>
                            <View >
                            <TouchableOpacity onPress={()=>this.moveCamera('right')}>
                                <SvgUri
                                width="50"
                                height="50"
                                svgXmlData={Svg.right_arrow}
                            />
                            </TouchableOpacity>
                            </View>

                        </View>
                    
                        <View style={{paddingLeft:75, paddingTop: 30 }}>
                        <TouchableOpacity onPress={()=>this.moveCamera('down')}>
                            <SvgUri
                            width="50"
                            height="50"
                            svgXmlData={Svg.down_arrow}
                            />
                            </TouchableOpacity>
                        </View>
                       
                  
                    </View>
                  <Text style={{marginTop:20,color: '#8f8f8f'}}>
                  </Text>
                </ProduceCenter>

              </Page>
            </>
        )
    }
}


function mapStateToProps(state){

    return {
        value : state.CommonReducer.value,
        error : state.CommonReducer.error,
        userType : state.UserTypeReducer.type ,
        token : state.UserTypeReducer.token ,
        userId : state.UserTypeReducer.userId ,
        userFlag : state.UserTypeReducer.userFlag,
        name : state.UserTypeReducer.companyName,
    


    }
}


function mapDispatchToProps(dispatch){
    return {
      
        showTabBar:()=>dispatch(showTabBar()),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FindMaterials)