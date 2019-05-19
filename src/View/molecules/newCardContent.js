import React from 'react';
import {Image,View,Alert,Text} from 'react-native';
import {Grid,Col,Row} from 'native-base';
import {BigTitle,SmallTitle} from 'src/View/atoms/offer';
import CountDownTimer from 'src/View/atoms/common/CountDownReact' ;
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs';
import styled from 'styled-components/native';
import Util from "src/Utils";

const MyReqText = styled.Text`
font-size: 15px;
font-weight: 900;
letter-spacing: 0.2px;
color: rgba(27, 27, 27, 0.9);
`

export default class CardContent extends React.Component{
    
    static defaultProps = {
        contentTitle :'',
        addrTitle :'',
        imageSource : '',
        isChat : false,
        count : '',
        endDate : '',
        category : '',
        onPress : ()=>{},
        isMyReqList:false,
        myReqLeftCount : 0,
        myReqRightCount : 0,
        isMegWindow:false,
        isNewOffer: 1,
        reqId : null,
        mode : '',
    }

    constructor(props){
        super(props);

        this.state={
            isEnd:false
        }

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
        }else {
            this.setState({
                isEnd : true
            })
        }

    }



    render(){
        return(
             
               <Grid style={{width:'100%',marginBottom:10}} {...this.props} onPress={this.props.onPress}>  
               {
                 this.props.endDate && this.props.endDate != '' ? <View style={{position:'absolute',top:0,zIndex:-100}}> 
                    <CountDownTimer
                        date={this.props.endDate}
                        containerStyle={{opacity: 0}}
                        onEnd={()=>{
                            this.updateStatus();
                        }}
                    />
                 </View> : <></>
               } 
                  
                  <Row style={{height:80,backgroundColor:'#ffffff'}}>
                  {
                      this.state.isEnd ? 
                      (
                          <View style={{width:'100%',height:'100%',backgroundColor:'rgba(255,255,255,0.8)',position:'absolute',top:0,zIndex:100}}>
            
                          </View>
                      ):
                      (<></>)
                  }
                  
                    
                     <Col style={{flexDirection:'row'}}>
                        <Image
                            style={{width: 80, height: 80,resizeMode:'cover'}}
                            source={{uri:this.props.imageSource}}
                        />

                        <View style={{justifyContent:'center',flex:1,marginLeft:14}}>
                            <BigTitle>{this.props.contentTitle}</BigTitle>
                            {
                                this.props.isNewOffer == 0 &&  !this.state.isEnd?
                                    <View style={{marginLeft: 2,}}>
                                        <SvgUri
                                            width="3"
                                            height="3"
                                            svgXmlData={Svg.reddot}
                                        />
                                    </View> : <></>
                            }
                            <SmallTitle>
                                {this.props.addrTitle  ? `${this.props.addrTitle} | ` : <></>}
                                {this.props.wishdate ? `${this.props.wishdate}` : ''}
                                {this.props.count ? ` ${this.props.count}` : ''}
                                {this.props.category ? ` ${this.props.category}` : ''}
                                {this.props.userFlag ? ` | ${this.props.userFlag}` : ''}
                                {this.props.price ? ` | ${this.props.price}` : ''}
                            </SmallTitle>
                        </View>


                    {
                        this.props.isChat ? (
                        <View style={{alignItems:'flex-end',marginTop:6,marginRight:6}}>
                            <SvgUri
                                width="15"
                                height="15"
                                svgXmlData={Svg.text_balloon}
                            />
                         </View>
                        ) : <></>
                    }
                    
                    {
                        this.props.isMegWindow 
                        ? <View style={{alignItems:'flex-end',alignSelf:'center',marginRight:16}}>
                               <SvgUri 
                                    width="15"
                                    height="15"
                                    svgXmlData={Svg.right_arrow}
                                />
                        </View>
                        :<></>
                    }
                    
                    {
                        this.props.isMyReqList ? (
                            <View style={{alignItems:'flex-start',flexDirection:'row',marginTop:6,marginRight:6}}>
                               <MyReqText>{this.props.myReqLeftCount}</MyReqText>
                               {
                                this.props.myReqLeftCount > 0 &&  !this.state.isEnd ? (
                                    <View>
                                    <SvgUri 
                                    width="3"
                                    height="3"
                                    svgXmlData={Svg.reddot}
                                />
                               </View>
                                ) : <></>
                               }
                               
                               <MyReqText>/</MyReqText>
                               <MyReqText>{this.props.myReqRightCount}</MyReqText>
                            </View>
                        ) : <></>
                    }
                     </Col>
                  </Row>
               </Grid>
               
        )
    }
}