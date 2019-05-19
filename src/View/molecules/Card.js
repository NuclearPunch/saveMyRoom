import React from 'react'
import {View,Image,Platform} from 'react-native'
import {Col, Row} from 'native-base';
import {CustomGrid, CustomText, CardView, } from 'src/View/atoms'
import CountDownTimer from 'src/View/atoms/common/CountDownReact' 
import {Card,
    FirstRowRightLable,FirstRowRightItem,SecondRowRightBigTitle,SecondRowRightSmallTitle,
    SecondRowRightButton,SecondRowRightButtonTitle
} from 'src/View/atoms/requestList'

import Util from "src/Utils";

export default class Card extends React.Component{

    static defaultProps = {

    }

    render(){
        return(
            <>
            <Card>
                                            
                <CustomGrid margin={20}>
                    <Row size={2.8} >
                    
                        <Col size={9}>
                            <CustomText fs={14} fw={500} ls={0.2} color='rgba(173, 173, 173, 0.9)' mt={3} mb={3} >
                                {`요청시간: ${val.iDate} `}</CustomText>
                        </Col>

                        <Col size={1} style={{alignItems:'flex-end'}}>
                            <FirstRowRightItem>
                                <FirstRowRightLable >{Util.reqStatus[val.status]}</FirstRowRightLable>
                            </FirstRowRightItem>
                        </Col>
                    </Row>

                    <Row size={1.2}>
                    <Col>
                        <CustomText fs={12} fw={300} ls={0.1} color='rgba(71, 71, 71, 0.9)' mt={0} mb={5} >
                        {`${val.caNm1} > ${val.caNm2} > ${val.caNm3}`}</CustomText>
                    </Col>
                    </Row>
                    <Row size={6} >
                        <Col size={3} onTouchStart={() => {this.setReqId(val._id,'ReqDetail', val.caNm3, null)}}>
                            <Image
                                style={{width: 100, height: 100}}
                                source={{uri: `https://interiorbrothers.com/${Util.srcConvert(val.imgFile[0].src,1)}`}}
                                
                            />
                        </Col>
                        <Col size={7} >
                            <CardView >

                                {
                                    Platform.OS == 'ios' ? <SecondRowRightBigTitle>{val.caNm3}</SecondRowRightBigTitle>
                                    : <SecondRowRightBigTitle style={{marginBottom:5}}>{val.caNm3}</SecondRowRightBigTitle>
                                }
                                <SecondRowRightSmallTitle numberOfLines={1} style={{marginBottom:0}}>{val.address}</SecondRowRightSmallTitle>
                               <CountDownTimer
                                date={val.insertDate.replace(' ','T')}
                               />
                                
                                <View style={{flex:1,justifyContent:'flex-end'}}>
                                    {this.props.userFlag == 1 ?
                                        <SecondRowRightButton  onPress={() => {this.setReqId(val._id, 'MyOfferList', val.caNm3, val.offerCnt)}}>
                                            <SecondRowRightButtonTitle>받은제안({val.offerCnt})</SecondRowRightButtonTitle>
                                        </SecondRowRightButton>
                                        :
                                        <SecondRowRightButton  onPress={() => {this.setReqId(val._id,'ReqDetail', val.caNm3, null)}}>
                                            <SecondRowRightButtonTitle>자세히 보기</SecondRowRightButtonTitle>
                                        </SecondRowRightButton>
                                    }

                                </View>
                            </CardView>
                        </Col>
                    </Row>
                </CustomGrid>
            </Card>
              
            </>
        )
    }
}