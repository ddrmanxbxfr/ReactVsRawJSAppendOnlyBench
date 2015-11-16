import ImageService from "./image_service";
import PerformanceTimer from "./performance_timer";
import HelloWorld from "./hello_world";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ImageList from './image_list';
import { ImageItem } from './image_service';

var body: HTMLElement = document.getElementById("img");
var refReactComponent;
var btn = document.getElementById("btnNewPictures");

function HandleBtnClick() {
  refReactComponent.handleNewItems();
}

btn.textContent = "Fetch " + ImageService.NB_ITEMS + " Pictures";
btn.addEventListener("click", HandleBtnClick);



console.log("--Generating Pictures--");
PerformanceTimer.Start();
var pictures: Array<ImageItem> = ImageService.FetchPicturesToRender();
PerformanceTimer.End("Picture Generation");

console.log("--Drawing React Component--");

refReactComponent = ReactDOM.render(
      <ImageList />,
      body
);
