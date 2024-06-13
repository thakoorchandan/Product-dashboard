import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  font-family: 'Roboto', sans-serif;
`;

export const FiltersPanel = styled.div`
  width: 30%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f2f5;
  border-right: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease-in-out;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #d9d9d9;
  }
`;

export const MainContent = styled.div`
  width: 70%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ChartWrapper = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    animation: ${isVisible ? fadeIn : fadeOut} 0.5s linear;
    opacity: ${isVisible ? 1 : 0};
    transition: opacity 0.5s linear;
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  transition: width 0.3s ease-in-out, margin-left 0.3s ease-in-out;

  .chart-wrapper {
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const StyledButton = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const StyledFilterBox = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const NoDataMessage = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => css`
    animation: ${isVisible ? fadeIn : fadeOut} 0.5s linear;
    opacity: ${isVisible ? 1 : 0};
    transition: opacity 0.5s linear;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 24px;
  font-weight: 500;
  color: #888;
  text-align: center;
  border: 2px dashed #d9d9d9;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-sizing: border-box;
`;
