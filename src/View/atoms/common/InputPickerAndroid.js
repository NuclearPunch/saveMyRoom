import React,{Component,createRef} from 'react';
import {Alert, StyleSheet, Modal, TouchableOpacity, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {Icon} from 'native-base';

export default class InputPicker extends Component{

    constructor(props){
        super(props)
        this.state={
            modalVisible: false,
            lable:'',
            inputValue:'',
        }
    }

    setModalVisible(visible) {
        if(this.props.enabled){
            this.setState({modalVisible: visible});
        }

    }

    onValueChange=()=>{
        //Alert.alert(JSON.stringify(this.state.inputValue))
        this.props.onValueChange && this.props.onValueChange()
    }

    setLableValue(position){
        this.setState({
            lable :this.props.pickerList[position].lable,
            inputValue : this.props.pickerList[position].value
        },()=>{
            this.onValueChange()
        })
    }

    getValue=()=>{
        return this.state.inputValue
    }

    init(){

        this.setState({
            modalVisible: false,
            lable:'',
            inputValue:'',
        })
    }

    render(){

        return(

            <>
                <TouchableOpacity {...this.props} style={{width:this.props.width,height:40,justifyContent:'flex-start',alignItems:'center',flexDirection:'row',borderWidth:1,borderColor:'#cccccc',borderRadius: 4}} onPress={()=>{
                    this.setModalVisible(!this.state.modalVisible)
                }}>
                    <View>
                        {
                            this.state.lable=='' ?
                                <Text style={{fontSize:16,letterSpacing:0.2,color: 'rgba(128, 128, 128, 0.9)',marginLeft:10}}>{this.props.placeholder}</Text>
                                :<Text style={{fontSize:16,letterSpacing:0.2,color: '#000',marginLeft:10}}>{this.state.lable}</Text>
                        }
                    </View>

                    <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                        <Icon name='chevron-down' type="Feather" style={{fontSize:20}}/>
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={{flex:1,justifyContent:'center',alignItems:'center', }}>
                        <View
                            onStartShouldSetResponder={event=>{
                                this.setModalVisible(!this.state.modalVisible)
                                return true;
                            }}
                            style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(27,27,27,0.5)'}} >

                            <View style={{backgroundColor:'#fff',width:'90%',  height: 'auto', maxHeight: '60%',}}>
                                <ScrollView >
                                    {
                                        this.props.pickerList.map((val_,index)=>{
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={styles.pickerListItem}
                                                    onPress={() => {
                                                        this.setLableValue(index)
                                                        this.setModalVisible(!this.state.modalVisible);
                                                    }}>
                                                    <Text style={{fontSize: 16,
                                                        color:'rgba(109, 109, 109, 0.9)',letterSpacing:0.1
                                                    }}>{val_.lable}</Text>
                                                </TouchableOpacity >)
                                        })
                                    }
                                </ScrollView>

                            </View>
                        </View>
                    </View>

                </Modal>

            </>
        )
    }
}




const styles = StyleSheet.create({
    pickerListItem:{
        backgroundColor:'#fff',
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.1)'
    }
})


