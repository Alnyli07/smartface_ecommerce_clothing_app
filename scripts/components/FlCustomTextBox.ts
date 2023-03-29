import FlCustomTextBoxDesign from 'generated/my-components/FlCustomTextBox';

export default class FlCustomTextBox extends FlCustomTextBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
