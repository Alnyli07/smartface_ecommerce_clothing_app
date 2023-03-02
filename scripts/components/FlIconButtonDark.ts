import FlIconButtonDarkDesign from 'generated/my-components/FlIconButtonDark';

export default class FlIconButtonDark extends FlIconButtonDarkDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
