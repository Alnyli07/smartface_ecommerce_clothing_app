import LviSingleLineCirclesDesign from 'generated/my-components/LviSingleLineCircles';

export default class LviSingleLineCircles extends LviSingleLineCirclesDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
