import * as React from 'react';
import axios from 'axios';

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
