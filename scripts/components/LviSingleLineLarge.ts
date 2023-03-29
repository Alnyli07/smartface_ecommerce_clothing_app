import LviSingleLineLargeDesign from 'generated/my-components/LviSingleLineLarge';

export default class LviSingleLineLarge extends LviSingleLineLargeDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
