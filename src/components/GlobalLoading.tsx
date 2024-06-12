'use client';

import { observer } from 'mobx-react-lite';
import { globalLoadingStore } from '../store/GlobalLoadingStore';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoadingModal = styled.div<{
  isLoading: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  animation: ${({ isLoading }) => (isLoading ? fadeIn : fadeOut)} 0.3s forwards;
`;

const LoadingContent = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const GlobalLoading = () => {
  const { isLoading, message } = globalLoadingStore;

  return (
    <LoadingModal isLoading={isLoading}>
      <LoadingContent>
        <Spinner />
        <p>{message}</p>
      </LoadingContent>
    </LoadingModal>
  );
};

export default observer(GlobalLoading);
