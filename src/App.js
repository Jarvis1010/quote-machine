import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  font-size: 400px;
  background: ${(props) => (props.dark ? "dodgerblue" : "#bada55")};
`;

function App() {
  const uglyiness = "Pretty";

  return <AppWrapper dark>{`Arik is ${uglyiness}`}</AppWrapper>;
}

export default App;
