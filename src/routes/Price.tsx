import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinTickers } from "../api";
import { IPriceData } from "./Coin";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
const BigWrapper = styled.div`
  grid-column: 1/ 3;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 10px;
  padding: 20px;

  span {
    display: block;
    text-align: center;
  }
  span:first-child {
    color: ${(props) => props.theme.secTxtColor};
  }
  span:nth-child(2) {
    margin: 10px 0;
  }
  span:last-child {
    font-size: 24px;
  }
`;
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 10px;
  padding: 20px;
  span {
    display: block;
  }
  span:first-child {
    color: ${(props) => props.theme.secTxtColor};
    margin-bottom: 10px;
  }
  span:last-child {
    font-size: 24px;
  }
`;
interface IUSD {
  tickersData: IPriceData;
}

function Price() {
  const { tickersData } = useOutletContext<IUSD>();
  const USD = tickersData.quotes.USD;
  const athDate = new Date(USD.ath_date);
  const athDateString = athDate.toLocaleDateString("ko-KR");
  console.log(tickersData.quotes.USD);
  return (
    <Container>
      <BigWrapper>
        <span>All Time High</span>
        <span>{athDateString}</span>
        <span>$ {USD.ath_price.toFixed(3)}</span>
      </BigWrapper>
      <Wrapper>
        <span>Change 1h</span>
        <span>{USD.percent_change_1h}%</span>
      </Wrapper>
      <Wrapper>
        <span>Change 6h</span>
        <span>{USD.percent_change_6h}%</span>
      </Wrapper>
      <Wrapper>
        <span>Change 12h</span>
        <span>{USD.percent_change_12h}%</span>
      </Wrapper>
      <Wrapper>
        <span>Change 24h</span>
        <span>{USD.percent_change_24h}%</span>
      </Wrapper>
    </Container>
  );
}

export default Price;
