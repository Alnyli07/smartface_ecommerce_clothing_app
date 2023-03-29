import FlPhotoDisplayerItem3Design from 'generated/my-components/FlPhotoDisplayerItem3';

export default class FlPhotoDisplayerItem3 extends FlPhotoDisplayerItem3Design {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
