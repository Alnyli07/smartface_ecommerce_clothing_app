import FlRadiusDotIndicatorDesign from 'generated/my-components/FlRadiusDotIndicator';

export default class FlRadiusDotIndicator extends FlRadiusDotIndicatorDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
