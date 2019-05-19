import React from 'react';
import {View, Text} from 'react-native';
import {DateTitle,Content} from 'src/View/atoms/offer';
import styled from 'styled-components/native';
import SvgUri from 'src/Utils/svgUrl';
import Svg from 'src/Utils/svgs';

const ReqText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2px;
  color: rgba(44, 44, 44, 0.9);
`

export default class Card extends React.Component{
    
    static defaultProps = {
        title : '날짜',
        isReqDetil : false,
        reqLeftCount : 0,
        reqRightCount : 0
    }

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Content>

                <View style={{marginBottom:10,marginTop:40,width:'100%',flexDirection:'row'}}>
                    <DateTitle>{this.props.title}</DateTitle>
                    {
                        this.props.isReqDetil ? 
                        ( <> 
                            <ReqText> (</ReqText>
                            <ReqText>{this.props.reqLeftCount}</ReqText>
                            {
                                this.props.reqLeftCount > 0 ? <View>
                                    <SvgUri 
                                    width="3"
                                    height="3"
                                    svgXmlData={Svg.reddot}
                                />
                               </View> : <></>
                            }
                            <ReqText>/</ReqText>
                            <ReqText>{this.props.reqRightCount}</ReqText>
                            <ReqText>)</ReqText>
                        </>)
                        : (<></>)
                    }
                    
                </View>

                {this.props.children}
                 
            </Content>
        )
    }
}