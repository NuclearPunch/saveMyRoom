import styled from 'styled-components/native';
//NotoSansKR-Black



export default styled.Text`
  
  font-size: 14px;
  font-weight: 300;
  color: #1f1f1f;
   margin-top:${prop =>prop.marginTop ? prop.marginTop : 0}
   margin-bottom:${prop =>prop.marginBottom ? prop.marginBottom : 0}
    color: ${prop =>prop.color ? prop.color : '#1f1f1f'} ;
`