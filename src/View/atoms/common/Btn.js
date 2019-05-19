import styled from "styled-components/native/dist/styled-components.native.esm";
import {Button} from "native-base";



export default styled.TouchableOpacity`
    width:100%;
    height:46px;
    background-color:${p=>p.bc};
    margin-top:${p=>p.mt}px;
    margin-bottom:8px;
    border-radius: 4px;
    justify-content:center;
    align-items:center;
    border:1px solid;
     borderColor:${p => p.bd ? p.bd : '#ffffff'};
`