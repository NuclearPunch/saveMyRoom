import React,{Component} from 'react';
import {Text,Alert,Platform,Keyboard,View} from 'react-native';
import { Icon,FooterTab, Button,Spinner} from 'native-base';
import Ripple from 'react-native-material-ripple';
import {connect} from "react-redux";
import SvgUri from 'src/Utils/svgUrl';
import Image from 'src/Utils/svgs';

class TabBar extends Component{

    constructor(props){
        super(props)            
        this.state={
            barSelected:[false,true,false],
            visible: true
        }

        this.count = 0 

    }

    componentDidMount(){
        if (Platform.OS === 'android') {
            this.keyboardEventListeners = [
              Keyboard.addListener('keyboardDidShow', this.visible(false)),
              Keyboard.addListener('keyboardDidHide', this.visible(true))
            ];
          }
        
    }


    visible = visible => () => this.setState({visible});

    componentWillUnmount() {
        this.keyboardEventListeners && this.keyboardEventListeners.forEach((eventListener) => eventListener.remove());
    }

    handleSelect=(position)=>{
       // this.getNewData();
        let selected = new Array(5).fill(false)
        selected[position] = true
        this.setState({
            barSelected : selected
        })
    }

    goto=(page)=>{
        this.props.navigation.navigate(page)
    }


    

    render(){

       
        if (!this.state.visible || this.props.hide) {
            return null;
          }else {
              return(

            <FooterTab {...this.props} 
              style={{flex:0.095,backgroundColor:'#fff',
                shadowRadius: 4,
                shadowOffset: {
                    height: 0,
                    width:2
                },
                shadowColor: 'transparent',
                borderTopWidth: 0,
                elevation:5
              }}
            >
    
           <Ripple style={{flex:1}} 
              onPress={()=>{
                  this.handleSelect(0)
                  this.goto('메뉴1')
            }}>
              <Button vertical style={{width:"100%"}} active={this.state.barSelected[0]}>
             {this.state.barSelected[4] ? 
                    (<SvgUri 
                        width="28"
                        height="28"
                        svgXmlData={Image.list}
                    /> ) : (
                        <SvgUri 
                        width="28"
                        height="28"
                        svgXmlData={Image.ulist}
                    />
                    )
                
                   }
              </Button>
            </Ripple>
           
            <Ripple style={{flex:1}} 
              onPress={()=>{
                  this.handleSelect(1)
                  this.goto('홈')
            }}>
              <Button vertical style={{width:"100%"}} active={this.state.barSelected[1]}>
             {this.state.barSelected[4] ? 
                    (<SvgUri 
                        width="28"
                        height="28"
                        svgXmlData={Image.home}
                    /> ) : (
                        <SvgUri 
                        width="28"
                        height="28"
                        svgXmlData={Image.uhome}
                    />
                    )
                
                   }
              </Button>
            </Ripple>
           

            <Ripple style={{flex:1}} 
              onPress={()=>{
                  this.handleSelect(2)
                  this.goto('메뉴2')
            }}>
              <Button vertical style={{width:"100%"}} active={this.state.barSelected[2]}>
             {this.state.barSelected[4] ? 
                    (<SvgUri 
                        width="28"
                        height="28"
                        svgXmlData={Image.mypage}
                    /> ) : (
                        <SvgUri 
                        width="28"
                        height="28"
                        svgXmlData={Image.umypage}
                    />
                    )
                
                   }
              </Button>
            </Ripple>
           
        
        </FooterTab>
         )
     }
          }
         
}


function mapStateToProps(state){

    return {
        userId: state.UserTypeReducer.userId,
        hide : state.TabBarVisibleReducer.hide,
    } 
}




export default connect(mapStateToProps)(TabBar)



