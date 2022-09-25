import React from "react";
import styled from "styled-components";

// example using styled-components
const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Copyright: React.FC = () => (
  <Container className="copyright">
    &copy; {new Date().getFullYear()} Your Name
  </Container>
);

export default Copyright;
