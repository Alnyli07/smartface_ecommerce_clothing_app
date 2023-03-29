import FlSingleLineCirclesDesign from 'generated/my-components/FlSingleLineCircles';

export default class FlSingleLineCircles extends FlSingleLineCirclesDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
