import FlProfileImageDesign from 'generated/my-components/FlProfileImage';

export default class FlProfileImage extends FlProfileImageDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
