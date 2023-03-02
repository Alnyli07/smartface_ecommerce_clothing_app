import DotIndicatorDesign from 'generated/my-components/DotIndicator';

export default class DotIndicator extends DotIndicatorDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
