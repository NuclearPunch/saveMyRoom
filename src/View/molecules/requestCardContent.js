import React from 'react';
import {Image,View,Text,Platform,TouchableOpacity} from 'react-native';
import {Row} from 'native-base';
import CountDownTimer from 'src/View/atoms/common/CountDownReact' ;
import Util from "src/Utils";
import {CustomGrid} from 'src/View/atoms'
import {SecondRowRightBigTitle} from 'src/View/atoms/requestList'
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs';

export default class RequestCardContent extends React.Component{


    static defaultProps = {
        contentTitle :'제품명',
        addrTitle :'주소',
        imageSource : 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=beauty-bloom-blue-67636.jpg&fm=jpg',
        count : '1',
        endDate:'1',
        wishdate : '1',
        onPress : ()=>{},
        isReqDetail: false,
        hasMessage : false,
        isNew : 1,
        reqId : null,
        mode : '',
    }

    state={
        isEnd : false
    }



    componentDidMount(){

        this.updateIsEnd();


    }


    componentDidUpdate(preProps) {

        if(preProps != this.props){
            this.updateIsEnd();
        }

    }

    updateIsEnd(){
        if(this.props.status && this.props.status >= 8) {
            this.setState({
                isEnd: true
            })
        }else{
            this.setState({
                isEnd: false
            })
        }
    }


    updateStatus(){

        if(this.props.mode === 'req' && this.props.reqId  && this.props.status < 8){
            const data = {
                token : this.props.token,
                requirementId : this.props.reqId,
                status : 8,
                mode: 'updateOfferStatus',
            };
            fetch(`${Util.baseUrl}/api/hunting/requirement`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            }).then(res => res.json()).then((res)=>{

                this.setState({
                    isEnd : true
                })
            }).catch(err=>{
                //console.error(err)
            })
        }


    }



    render(){
        return(
            <CustomGrid key={this.props.key} margin={0} style={{marginTop:10, marginBottom: 10,width:'100%'}} onPress={this.props.onPress}>
            {
                this.state.isEnd ? 
                (
                    <View style={{width:'100%',height:'100%',backgroundColor:'rgba(255,255,255,0.8)',position:'absolute',top:0,zIndex:100}}>
      
                    </View>
                ):
                (<></>)
            }
                                        <Row size={7} >
                                            <TouchableOpacity  style={{flex:1,}} onPress={this.props.onPress} >
       
                                                <Image
                                                    style={{width: '100%', height: 120, resizeMode:'cover'}}
                                                    source={{uri: this.props.imageSource}}
                                                />
                                            </TouchableOpacity>
       
                                        </Row>
       
       
                                        <Row size={3} style={{marginTop:5}}>
                                            <TouchableOpacity  style={{flex:1,}} onPress={this.props.onPress}>
       
                                            <View style={{
                                                width:'100%',
                                                height: 45,
                                            }} >
                                                <View style={{
                                                    flex:1,
                                                    alignSelf:'flex-start',
                                                    flexDirection:'row',
                                                    alignItems:'flex-start',
                                                }} >
                                                    {
                                                        Platform.OS == 'ios' ? <SecondRowRightBigTitle>{this.props.contentTitle}</SecondRowRightBigTitle>
                                                            : <SecondRowRightBigTitle style={{marginTop:-5, }}>{this.props.contentTitle}</SecondRowRightBigTitle>
                                                    }
                                                    {
                                                        this.props.isNew == 0 &&  !this.state.isEnd?
                                                            <View style={{marginLeft: 2,}}>
                                                                <SvgUri
                                                                    width="3"
                                                                    height="3"
                                                                    svgXmlData={Svg.reddot}
                                                                />
                                                            </View> : <></>
                                                    }

                                                    <View style={{ flex:1, flexDirection:'column', }}>
                                                        <View  style={{ alignSelf:'flex-end'}}>
                                                        {
                                                            this.props.isReqDetail ? (
                                                                <>
                                                                  {
                                                                    
                                                                        this.props.hasMessage ? (
                                                                        <View style={{alignItems:'flex-end',marginTop:6,marginRight:6}}>
                                                                            <SvgUri 
                                                                                width="15"
                                                                                height="15"
                                                                                svgXmlData={Svg.text_balloon}
                                                                            />
                                                                         </View>
                                                                        ) : <></>
                                                                    
                                                                  }


                                                                </>


                                                            ) : (
                                                                <CountDownTimer
                                                                date={this.props.endDate}
                                                                onEnd={()=>{
                                                                    this.updateStatus();
                                                                }}
                                                            />
                                                            )
                                                        }
                                                            
                                                        </View>
       
                                                    </View>
       
       
                                                </View>
       
                                                <View style={{
                                                    flex:1,
                                                    alignSelf:'flex-start',
                                                    flexDirection:'row',
                                                    alignItems:'flex-start',
                                                }} >
                                                    <Text style={{
                                                        height: 18,
                                                        fontSize: 12,
                                                        fontWeight: '300',
                                                        color: 'rgba(44, 44, 44, 0.9)',
                                                    }}>
                                                        {this.props.addrTitle} {'| '}
                                                        {this.props.count} {'| '}
                                                        {this.props.wishdate}
       
                                                    </Text>
       
                                                </View>
       
       
                                            </View>
                                            </TouchableOpacity>
                                        </Row>
                                    </CustomGrid>
        )
    }
}