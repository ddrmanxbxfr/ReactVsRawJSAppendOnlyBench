import ImageService from "./image_service";
import PerformanceTimer from "./performance_timer";
import ImageList from './image_list';
import { ImageItem } from './image_service';

var imgList = new ImageList("img");
var btn = document.getElementById("btnNewPictures");
function HandleBtnClick() {
  imgList.render();
}

btn.textContent = "Fetch " + ImageService.NB_ITEMS + " Pictures";
btn.addEventListener("click", HandleBtnClick);

console.log("--Generating Pictures--");
PerformanceTimer.Start();
ImageService.FetchPicturesToRender();
PerformanceTimer.End("Picture Generation");

console.log("--Drawing Raw Render--");
imgList.render();
