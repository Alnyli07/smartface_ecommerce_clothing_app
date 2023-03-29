import FlPhotoDisplayerDesign from 'generated/my-components/FlPhotoDisplayer';

export default class FlPhotoDisplayer extends FlPhotoDisplayerDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
