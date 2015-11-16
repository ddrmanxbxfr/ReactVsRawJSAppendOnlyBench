import * as React from 'react';
import ImageService from './image_service';
import { ImageItem } from './image_service';
import PerformanceTimer from './performance_timer';
import SingleImage from './single_image';

class ImageListProps {
  public pictures: Array<ImageItem>;
  public loadingFlag: boolean;
}

export default class ImageList extends React.Component<any, any> {
  private mounted: boolean;
  private loadingFlag: boolean;
  private renderId: number;

  constructor() {
    this.renderId = 0;
    this.state = this.getPictures();
    super();
  }

  getPictures(): ImageListProps {
    if (this.mounted) {
      var pictures: Array<ImageItem> = this.state.pictures;
    } else {
      var pictures: Array<ImageItem> = new Array();
    }
      var newPictures = ImageService.FetchPicturesToRender();
      var concat = pictures.concat(newPictures);
      return { pictures: concat, loadingFlag: false };
  }

  componentDidMount(): void {
    this.mounted = true;
    //to load comments initially
    this.getPictures();
  }

  componentDidUpdate(): void {
    PerformanceTimer.End("React-Render");
  }

  handleNewItems(e: any): void {
    this.setState(this.getPictures());
  }

  render() {
    PerformanceTimer.Start();
    var PicturesNode = this.state.pictures.map(function (picture) {
    return (
        <SingleImage url={picture.url} />
        );
    });

    return (
        <div> {PicturesNode} </div>
        );
  }
}
