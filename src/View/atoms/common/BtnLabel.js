import styled from "styled-components/native/dist/styled-components.native.esm";
import {Text} from "native-base";

export default styled(Text)`
   color : ${p=>p.color};
   font-weight: ${p=>p.fw};
   letter-spacing: ${p=>p.ls};
   ${p => p.size && `
        font-size: ${p.size}px; 
        margin-top: 2px;
    `}
`