import { ImageItem } from './image_service';
export default class SingleImage {
  public static render(img: ImageItem): HTMLDivElement {
    var divDOM = document.createElement("div");
    var imgDOM = document.createElement("img");
    imgDOM.src = img.url;
    divDOM.appendChild(imgDOM);
    return divDOM;
  }
}
