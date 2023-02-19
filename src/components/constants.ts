import * as React from 'react';
import axios from 'axios';
import { keyframes } from 'styled-components';


const BASE_URL = 'http://localhost:4000';
//const BASE_URL = 'https://wonderful-pack.herokuapp.com';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

export interface IRoutesProps {
  path: string;
  link: React.ReactNode;
  icon: React.ReactNode;
}

//Types for FormsIterator
export interface IRouteArray {
  options: IRoutesProps[];
}

export interface ISvgProps {
  width?: string;
  height?: string;
  color?: string;
}

export const growing_height = keyframes`
  0% {
    height: 0px;
  }
  25% {
    height: 60px;
  }
  75% {
    height: 60px;
  }
  95% {
    height: 60px;
  }
  100% {
    height: 0px;
    display: none;
  }
`;
export const growing_weights = keyframes`
  0% {
    width: 0px;
    opacity: 1;
  }
  5% {
    width: 300px;
    opacity: 1;
  }

  25% {
    width: 300px;
    opacity: 1;
  }

  75% {
    width: 300px;
    opacity: 1;
  }
  95% {
    width: 0px;
    opacity: 1;
  }
  100% {
    width: 0px;
    opacity: 0;
  }
`;