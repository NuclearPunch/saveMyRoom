import {Button} from 'native-base';
import styled from 'styled-components/native';

export default styled.TouchableOpacity`
width:300;
height:50;
justifyContent:center;
align-items:center;
backgroundColor:${prpo => prpo.bc ? prpo.bc : '#ffd400'};
border:1px solid;
borderColor:${prpo => prpo.bd ? prpo.bd : '#ffffff'};
marginTop:${prpo => prpo.marginTop ? prpo.marginTop : 0};
`