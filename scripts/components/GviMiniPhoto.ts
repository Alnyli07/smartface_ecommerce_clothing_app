import GviMiniPhotoDesign from 'generated/my-components/GviMiniPhoto';

export default class GviMiniPhoto extends GviMiniPhotoDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
