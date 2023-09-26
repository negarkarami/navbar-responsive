
import styled from "styled-components";
import Navbar from "./Navbar";

function App() {
  return (
   <Container>
       <Navbar/>
   </Container>
  );
}

export default App;

const Container = styled.div`
  background: cornsilk;
  height:100vh;
`;
