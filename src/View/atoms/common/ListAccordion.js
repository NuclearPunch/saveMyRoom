import React,{Component} from 'react'
import {View} from 'react-native'
import {Button,Icon} from 'native-base';
import styled from 'styled-components/native';


const ListTitleButton = styled(Button)`
    flex:1;
    width:100%;
    align-items:flex-end;
    backgroundColor: #fff;
    borderRadius:0;
    border-bottom-width:1;
    border-bottom-color:rgba(193, 193, 193, 0.5);
    elevation:0;
`

const ListTitleButtonTitle = styled.Text`
   align-self:center;
   font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: rgba(27, 27, 27, 0.9);
  margin-left:6%;
`

export default class ListAccordion extends Component{

    constructor(props){
      super(props);

      
      this.state={
        clicked : false,
        iconRotate : 0,
      }
     this.ListTitle = this.props.title;  
    }
    componentDidMount(){
      if(this.props.isAccordion){
        this.accordionHandle()
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
      return(
        <View style={{flex:1}} >
        <ListTitleButton iconRight onPress={this.accordionHandle}>
          <ListTitleButtonTitle style={{alignSelf:'center'}}>{this.ListTitle}</ListTitleButtonTitle>
          <View style={{alignSelf:'center'}}>
            <Icon name='chevron-down' type="Feather" style={{
                fontSize:20,
               color:'#595959' ,
              transform:[
                {rotate:`${this.state.iconRotate}deg`}
              ]
            }}/>
          </View>
        </ListTitleButton>

        <View style={{width:'100%',height:'auto'}}>
            {this.state.clicked ? this.props.children : <></>}
        </View>
      
        </View>
      )
    }
}

