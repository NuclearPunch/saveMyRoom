import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Alert
} from 'react-native';

const styles = StyleSheet.create({
  cardItemTimeRemainTxt: {
    fontSize: 20,
    color: '#ee394b'
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  container: {
    flexDirection: 'row',
  },
  
  defaultTime: {
    paddingHorizontal: 3,
    backgroundColor: 'rgba(85, 85, 85, 1)',
    fontSize: 12,
    color: 'white',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  
  defaultColon: {
    fontSize: 12, color: 'rgba(85, 85, 85, 1)'
  },
  customerText:{
    fontSize: 10,
    fontWeight: '300',
    letterSpacing: 0.2,
    color: 'rgba(255, 80, 80, 0.9)'
  }
});

class CountDown extends Component {
  static displayName = 'Simple countDown';
 
  static defaultProps = {
    date: new Date(),
    days: {
      plural: '일',
      singular: '일',
    },
    hours: 'h',
    mins: 'm',
    segs: 's',
    onEnd: () => {},

    containerStyle: styles.container,
    daysStyle: styles.defaultTime,
    hoursStyle: styles.defaultTime,
    minsStyle: styles.defaultTime,
    secsStyle: styles.defaultTime,
    firstColonStyle: styles.defaultColon,
    secondColonStyle: styles.defaultColon,
    cstyle : styles.customerText
  };

  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };

  componentDidMount() {
    //console.log(this.props.date);//"2017-03-29T00:00:00+00:00"
    this.interval = setInterval(()=> {
      const date = this.getDateData(this.props.date);
      if (date) {
        this.setState(date);
      } else {
        this.stop();
        this.props.onEnd();
      }
    }, 1000);
  }
  componentWillMount() {
    const date = this.getDateData(this.props.date);
    if (date) {
      this.setState(date);
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  date(d){
     return new Date(new Date(d).getTime()-9*60*60*1000)
  }

  getDateData(endDate) {
    //new Date(new Date(date).getTime()-9*60*60*1000)
    
    let end = this.date(endDate);
    let after5 = end.getDate()+5
    end.setDate(after5)
    let diff = (Date.parse(end.toString()) - Date.parse(new Date().toString())) / 1000;
    
    if (diff <= 0) {
      return false;
    }
    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff >= (365.25 * 86400)) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;
    if(timeLeft.days == 0 && timeLeft.hours == 0 && timeLeft.min == 0 && timeLeft.sec == 1){
      setTimeout(()=>{
        this.setState({
          sec:0
        })
      },1000)
    }
    return timeLeft;
  }
  render() {
    const countDown = this.state;
    let days;
    if (countDown.days === 1) {
      days = this.props.days.singular;
    } else {
      days = this.props.days.plural;
    }
    return (
  
        <View style={this.props.containerStyle}>
          <Text style={this.props.cstyle}>남은 시간: </Text>
          { (countDown.days>0) ? <Text style={this.props.cstyle}>{ this.leadingZeros(countDown.days)+days+' '}</Text> : null}
          <Text style={this.props.cstyle}>{ this.leadingZeros(countDown.hours)}</Text>
          <Text style={ this.props.cstyle}>시간 </Text>
          <Text style={this.props.cstyle}>{this.leadingZeros(countDown.min)}</Text>
          <Text style={this.props.cstyle}>분 </Text>
        </View>
    );
  }
  stop() {
    clearInterval(this.interval);
  }
  leadingZeros(num, length = null) {

    let length_ = length;
    let num_ = num;
    if (length_ === null) {
      length_ = 2;
    }
    num_ = String(num_);
    while (num_.length < length_) {
      num_ = '0' + num_;
    }
    return num_;
  }
};

export default CountDown;