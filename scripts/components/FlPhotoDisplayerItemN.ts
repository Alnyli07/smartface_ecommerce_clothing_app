import FlPhotoDisplayerItemNDesign from 'generated/my-components/FlPhotoDisplayerItemN';

export default class FlPhotoDisplayerItemN extends FlPhotoDisplayerItemNDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
