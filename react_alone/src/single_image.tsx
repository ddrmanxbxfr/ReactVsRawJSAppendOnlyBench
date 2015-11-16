import * as React from 'react';

class ImageProps {
  public url: string;
}

export default class SingleImage extends React.Component<ImageProps, any> {
  constructor(props:ImageProps) {
    super(props);
  }

  render() {
    return <div><img src={this.props.url} /></div>
  }
}
