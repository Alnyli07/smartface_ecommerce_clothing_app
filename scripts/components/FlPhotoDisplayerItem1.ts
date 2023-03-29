import FlPhotoDisplayerItem1Design from 'generated/my-components/FlPhotoDisplayerItem1';

export default class FlPhotoDisplayerItem1 extends FlPhotoDisplayerItem1Design {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
