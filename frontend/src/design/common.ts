import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const basicDivStyle = () => css`
  background-color: #ef5350;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
`;
export const Button = styled.button`
  ${basicDivStyle}
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const InfoDiv = styled.div`
  ${basicDivStyle}
  padding:8px 14px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none !important;
`;

export const LoadingPage = styled.div`
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: #ef5350;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PageLayout = styled.div`
  margin: 20px;
  position: relative;
`;

interface ContentLoaderProps {
  width?: string;
  height?: string;
}

export const ContentLoader = styled.div<ContentLoaderProps>`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  background-color: #f3f3f3;
`;
