import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
`;

const CoinInfo = ({ symbol, name, price }) => {
  return (
    <Container>
      <StyledText>
        {symbol}({name})
      </StyledText>
      <StyledText bold>${(price * 1).toLocaleString()}</StyledText>
      {/* toLocalString : 세 번째 자리에 콤마찍음 */}
    </Container>
  );
};

export default CoinInfo;
