import FlIndicatorWithButtonsDesign from 'generated/my-components/FlIndicatorWithButtons';

export default class FlIndicatorWithButtons extends FlIndicatorWithButtonsDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
