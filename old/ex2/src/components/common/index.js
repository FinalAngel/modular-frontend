import React from "react";
import styled from "styled-components";

// example using styled-components with a direct export
export const Container = styled.div`
  width: 800px;
  margin: 20px auto;
`;

// example using inline-css
const styles = {
  textAlign: "center",
  marginTop: "20px",
};

export const Copyright = () => (
  <p style={styles}>&copy; {new Date().getFullYear()} Demo Site</p>
);
