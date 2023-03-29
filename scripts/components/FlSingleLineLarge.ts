import FlSingleLineLargeDesign from 'generated/my-components/FlSingleLineLarge';

export default class FlSingleLineLarge extends FlSingleLineLargeDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
