import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const Loader = styled.div`
  text-align: center;
`;
interface LocationState {
  state: string;
}
function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as LocationState;
  console.log(state);

  return (
    <Container>
      <Header>
        <Title>{state ? state : "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
