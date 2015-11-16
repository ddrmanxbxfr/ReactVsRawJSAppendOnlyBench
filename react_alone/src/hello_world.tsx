import * as React from 'react';

class HelloWorldProps {
  public name:string;
}

export default class HelloWorld extends React.Component<HelloWorldProps, any> {
  private foo:number;
  constructor(props:HelloWorldProps) {
    super(props);
  }

  render() {
    return <div>Hello world!</div>
  }
}
