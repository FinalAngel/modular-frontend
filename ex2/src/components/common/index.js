import React from "react";
import styled from "styled-components";

// example using styled-components
const StyledDiv = styled.div`
  width: 800px;
  margin: 20px auto;
`;

export const Container = ({ children }) => <StyledDiv>{children}</StyledDiv>;

// example using styled-components
const CopyRightStyle = styled.p`
  text-align: center;
  margin-top: 20px;
`;

export const Copyright = () => (
  <CopyRightStyle>&copy; 2020 Demo Site</CopyRightStyle>
);
