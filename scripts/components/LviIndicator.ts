import LviIndicatorDesign from 'generated/my-components/LviIndicator';

export default class LviIndicator extends LviIndicatorDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
