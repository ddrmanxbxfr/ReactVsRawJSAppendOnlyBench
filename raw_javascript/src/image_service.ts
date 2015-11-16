export class ImageItem {
  public id: any;
  public url: string;
}

export default class ImageService {
  public static LastPicturesGenerated: Array<ImageItem>;
  private static MIN_PX: number = 1;
  private static MAX_PX: number = 10;
  public static NB_ITEMS: number = 1000;
  private static BASE_URL: string = "http://lorempixel.com/";
  private static SEQ_ID: number = 0;

  // Provice N Url to lorem ipsum with random width
  public static FetchPicturesToRender(reset?: boolean): Array<ImageItem> {
    if (reset === true || ImageService.LastPicturesGenerated === undefined) {
      ImageService.LastPicturesGenerated = new Array();
      for (var i = 0; i < ImageService.NB_ITEMS; ++i) {
        ImageService.LastPicturesGenerated.push({ id: i, url: ImageService.SingleUrl() });
      }
    } else {
      for (var i = 0; i < ImageService.NB_ITEMS; ++i) {
        ImageService.LastPicturesGenerated[i].id = ++ImageService.SEQ_ID;
      }
    }

    return ImageService.LastPicturesGenerated;
  }

  private static SingleUrl(): string {
    var height: number = Math.floor(Math.random() * ImageService.MAX_PX) + ImageService.MIN_PX;
    var width: number = Math.floor(Math.random() * ImageService.MAX_PX) + ImageService.MIN_PX;
    return ImageService.BASE_URL + height.toString() + "/" + width.toString();
  }
}

