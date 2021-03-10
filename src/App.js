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

/**
 * quotes list
 *
 * https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json
 */
