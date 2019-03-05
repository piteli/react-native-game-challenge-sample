import React from "react";

export default class ApiMain extends React.Component {

  addDefaultHeader(authenticationType){
    let body = { Accept : 'application/json',
          'Content-Type' : 'application/json'};
    authenticationType == null ? null : body['Authorization'] = authenticationType;
    return body;
  }

  addCustomHeader(noDefaultHeader, authenticationType, extra){
    if(noDefaultHeader){
      const header = {Authorization : authenticationType};
      return Object.assign(header, extra);
    }else{
      const header = this.addDefaultHeader(authenticationType);
      return Object.assign(header, extra);
    }
  }

  getApi(baseUrl, path, authenticationType, useCustomHeader, addDefaultCustomHeader, extraArgsHeader){
    return fetch(`${baseUrl}${path}`, {
      method: 'GET',
      headers: useCustomHeader ?
        this.addCustomHeader(addDefaultCustomHeader, authenticationType, extraArgsHeader) :
        this.addDefaultHeader(authenticationType)
    });
  }

  postApi(baseUrl, path, body, authenticationType, useCustomHeader, addDefaultCustomHeader, extraArgsHeader){
    return fetch(`${baseUrl}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: useCustomHeader ?
        this.addCustomHeader(addDefaultCustomHeader, authenticationType, extraArgsHeader) :
        this.addDefaultHeader(authenticationType)
    });
  }
}
