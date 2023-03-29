import FlZoomButtonsDesign from 'generated/my-components/FlZoomButtons';

export default class FlZoomButtons extends FlZoomButtonsDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
