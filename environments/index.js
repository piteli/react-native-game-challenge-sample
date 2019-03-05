import React from "react"
import {prodMode, prodBaseUrl, devBaseUrl} from '../config';
import {prodPath} from './production';
import {devPath} from './development';

export default class Env extends React.Component {

  getBaseUrl(){
    return prodMode ? prodBaseUrl : devBaseUrl;
  }

  getPath(){
    return prodMode ? prodPath : devPath;
  }
}
