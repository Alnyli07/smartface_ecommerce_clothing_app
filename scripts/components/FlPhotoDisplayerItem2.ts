import FlPhotoDisplayerItem2Design from 'generated/my-components/FlPhotoDisplayerItem2';

export default class FlPhotoDisplayerItem2 extends FlPhotoDisplayerItem2Design {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
