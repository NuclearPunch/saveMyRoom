import styled from 'styled-components/native';
//NotoSansKR-Black

export default styled.Text`

  font-size: 20px;
  font-weight: bold;
  color: #1f1f1f;
 ${p => p.fs && `
    font-size: ${p.fs}px;
    font-weight: 900;
  `}
 
`