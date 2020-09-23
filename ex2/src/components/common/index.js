import React from "react";
import styled from "styled-components";

// example using styled-components with a direct export
export const Container = styled.div`
  width: 800px;
  margin: 20px auto;
`;

// example using styled-components
const CopyRightStyle = styled.p`
  text-align: center;
  margin-top: 20px;
`;

export const Copyright = () => (
  <CopyRightStyle>&copy; 2020 Demo Site</CopyRightStyle>
);
