import React, { ReactNode } from "react";
import styled from "styled-components";

const StyleLayout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Layout = ({ children }: IProps) => (
    <StyleLayout>{children}</StyleLayout>
);

interface IProps {
  children: ReactNode;
}

export default Layout;
