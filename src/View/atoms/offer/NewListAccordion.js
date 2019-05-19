import React from 'react';
import {Alert, View,Image,ScrollView,TouchableWithoutFeedback,StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Grid,Col,Row,Button,Icon} from 'native-base';
import {BigTitle,SmallTitle} from 'src/View/atoms/offer';
import Util from "src/Utils";
import CountDownTimer from 'src/View/atoms/common/CountDownReact' ;
import {ConsumerContentBox, PrText} from "../findMaterials";

const ListTitleButton = styled(Button)`
    
    width:94%;
    align-items:flex-end;
    backgroundColor: #fff;
    borderWidth:0;
    borderColor:rgba(0,0,0,0);
    elevation:0;
    marginLeft:6%;
`

const ListTitleButtonTitle = styled.Text`
   align-self:flex-start;
   font-size: 24px;
   font-weight: bold;
   letter-spacing: 0.3px;
   color: rgba(44, 44, 44, 0.9);
`

const ListItem = styled.View`
   height:75px;
   width:88%;
   align-self:center;
   margin-top:15;
   border-bottom-width:1px;
   border-bottom-color:#eeeeee;
`
const ListItemTitle1 = styled.Text`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: rgba(27, 27, 27, 0.9);
    margin-bottom:2px;
`
const ListItemTitle2 = styled.Text`
    font-size: 14px;
    letter-spacing: 0.2px;
    color: rgba(128, 128, 128, 0.9);
`

const styles = StyleSheet.create({
    endTimeStyle:{
        fontSize: 10,
        fontWeight: '300',
        letterSpacing: 0.2,
        color: '#b5b5b5'
    }
})

export default class ListAccordion extends React.Component{

    static defaultProps = {
        isAccordion : false,
        title:'요청 정보',
        allCat : '',
        Cat1 : '',
        address : '',
        requireTime : '',
        requireCount: '',
        imageSource : '',
        explanation: '',
        workInf : '해당사항 없음',
        hasBigPicture : false,
        imageOnPress: ()=>{},
        ImgList:[],
        mainPicture : '',
        endTime : '',
    }

    state={
          clicked : false,
          iconRotate : 0,
          noneAcc : false,
          opacity:1,
          isEnd:false
    }

    componentDidMount(){

        if(this.props.isAccordion){
          this.accordionHandle()
        }

        if(this.props.userFlag && this.props.userFlag == 2){
            this.setState({
               noneAcc : true,
            });
        }

    }

    accordionHandle=()=>{
        this.setState((preState,props)=>{
         return {
            clicked:!preState.clicked,
            iconRotate : !preState.clicked ? 180 : 0
         }})
    }
     
    render(){
        return (
          <>
              {!this.state.noneAcc &&
                  <ListTitleButton iconRight onPress={this.accordionHandle}>
                      <ListTitleButtonTitle style={{alignSelf:'center'}}>{this.props.title}</ListTitleButtonTitle>
                      <View style={{alignSelf:'center'}}>
                          <Icon name='chevron-down' type="EvilIcons" style={{
                              fontSize:40,
                              color:'#353535' ,
                              transform:[
                                  {rotate:`${this.state.iconRotate}deg`}
                              ]
                          }}/>
                      </View>
                  </ListTitleButton>
              }


          
            {this.state.clicked 
                ? (
                <View style={{marginTop:7}}>
                
                 {
                     this.props.hasBigPicture ? (
                         <View style={{width:'88%',alignSelf:'center',marginBottom:30}}>
                         {
                             !this.state.isEnd ? <CountDownTimer
                                    date={this.props.endTime}
                                    onEnd={_=>{
                                        this.setState({
                                            opacity:0.5,
                                            isEnd:true
                                        })
                                    }}
                            /> : <CountDownTimer
                                    cstyle={styles.endTimeStyle}
                                    date={this.props.endTime}
                            />
                         }
                            
                            <Image style={{width: '100%', height: 268, marginTop: 10}}
                                resizeMode="cover"
                                source={{uri: this.props.mainPicture}}
                            />

                            {this.props.ImgList.length <= 1 ? 
                              (
                               <></>
                              ) 
                            :(
                                <ScrollView horizontal={true} style={{marginTop: 5}} showsHorizontalScrollIndicator={false}>

                                {
                                this.props.ImgList.map( (img, i) => {
                                    return(
        
                                        <TouchableWithoutFeedback key={i}  style={{width: 50, height: 50, marginRight: 5}}  onPress={this.props.imageOnPress}>
                                            <Image
                                                style={{width: 50, height: 50, marginRight: 5}}
                                                source={{uri: `https://interiorbrothers.com/${Util.srcConvert(img.src,1)}`}}
                                            />
                                        </TouchableWithoutFeedback>
                                    )
                                })
                                }
                            </ScrollView>
                            )}
                            
                         
                         </View>
                     ):(<></>)
                     
                 }
                 
                    <ListItem style={{opacity:this.state.opacity}}>
                      <ListItemTitle1>자재 카테고리</ListItemTitle1>
                      <ListItemTitle2>{this.props.allCat}</ListItemTitle2>
                    </ListItem>

                    <ListItem style={{opacity:this.state.opacity}}>
                      <ListItemTitle1>필요 수량</ListItemTitle1>
                      <ListItemTitle2>{this.props.requireCount}</ListItemTitle2>
                    </ListItem>

                    <ListItem style={{opacity:this.state.opacity}}>
                      <ListItemTitle1>필요 시기</ListItemTitle1>
                      <ListItemTitle2>{this.props.requireTime}</ListItemTitle2>
                    </ListItem>

                    <ListItem style={{opacity:this.state.opacity}}>
                      <ListItemTitle1>현장 주소</ListItemTitle1>
                      <ListItemTitle2>{this.props.address}</ListItemTitle2>
                    </ListItem>

                    <ListItem style={{opacity:this.state.opacity}}>
                      <ListItemTitle1>기타 설명</ListItemTitle1>
                      <ListItemTitle2>{this.props.explanation}</ListItemTitle2>
                    </ListItem>

                    <ListItem style={{borderBottomWidth:0,opacity:this.state.opacity}}>
                      <ListItemTitle1>시공 정보</ListItemTitle1>
                      <ListItemTitle2>{this.props.workInf ? '시공 연결 가능 여부 요청' : '해당사항 없음'}</ListItemTitle2>
                    </ListItem>

                 </View> 
                 
                ) 
                : (
                <Grid style={{width:'94%',marginTop:10,marginLeft:'6%'}}>   
          
                <Row style={{height:80,backgroundColor:'#ffffff'}}>
                  
                   <Col style={{flexDirection:'row'}}>
                      <Image
                          style={{width: 80, height: 80,resizeMode:'cover'}}
                          source={{uri:this.props.imageSource}}
                      />
      
                      <View style={{justifyContent:'center',flex:1,marginLeft:14}}>
                          <BigTitle>{this.props.Cat1}</BigTitle>
                          <SmallTitle>
                              {`${this.props.address} | ${this.props.requireTime} | ${this.props.requireCount}`}
                          </SmallTitle>
                      </View>   
                   </Col>
                </Row>
      
             </Grid>)
            }

            </>
        )
    }
}