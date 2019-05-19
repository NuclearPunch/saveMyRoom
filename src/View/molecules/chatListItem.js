import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Thumbnail,Badge} from 'native-base'

export default class ChatListItem extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.item} {...this.props}>
              <>
                <View style={styles.left}>
                   <Thumbnail source={{ uri: this.props.icon }} />   
                </View>

                <View style={[styles.center]}>
                   <Text style={styles.topTitle}>{this.props.chatTitle}</Text>
                   <Text style={styles.bottomTitle}>{this.props.chatContent}</Text>
                </View>

                <View style={styles.right}>
                   <Text style={styles.time}>{this.props.time}</Text>

                   {this.props.badge > 0 &&
                   <Badge>
                     <Text style={styles.badgeText}>{this.props.badge}</Text>
                   </Badge>
                   }
                    {this.props.badge <= 0 &&
                    <Badge style={{backgroundColor:'#fff'}}>

                    </Badge>
                    }


                </View>
              </>
            </TouchableOpacity>
        )
    }
} 

ChatListItem.defaultProps={
   icon : 'https://cdn.onlinewebfonts.com/svg/img_311846.png',
   chatTitle : '-',
   chatContent : '',
   time : '' ,
   badge : '0'
}


const styles = StyleSheet.create({
    item : {
        width:'100%',
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#eeeeee',
        height:70
    },
    left : {
       width:'25%',
       alignItems:'center',
       justifyContent :'center'
    },
    center:{
       width:'55%',
       justifyContent :'center'
    },
    right:{
        width:'20%',
        alignItems:'center',
        justifyContent :'center',
        paddingRight: 5,
    },
    topTitle:{
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.2,
        color: 'rgba(27, 27, 27, 0.9)',
    },
    bottomTitle:{
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: 0.2,
        color: 'rgba(128, 128, 128, 0.9)',
        paddingTop:5
    },
    time:{
        fontSize: 10,
        fontWeight: '300',
        letterSpacing: 0.1,
        color: 'rgba(181, 181, 181, 0.9)',
        marginBottom:5,
    },
    badge:{
       alignSelf:'center'
    },
    badgeText:{
        color:'#fff',
        fontSize: 12,
        fontWeight: '500'
      
    }
})