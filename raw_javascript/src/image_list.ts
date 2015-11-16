import ImageService from './image_service';
import { ImageItem } from './image_service';
import PerformanceTimer from './performance_timer';
import SingleImage from './single_image';

export default class ImageList {
  renderRef: HTMLElement;

  constructor(id: string) {
    this.renderRef = document.getElementById(id);
  }

  render(): void {
    var pictures = ImageService.FetchPicturesToRender();
    PerformanceTimer.Start();
    for (var i = 0; i < pictures.length; ++i) {
      this.renderRef.appendChild(SingleImage.render(pictures[i]));
    }
    PerformanceTimer.End("Raw-Render");
  }
}
