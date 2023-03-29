import LviCustomTextBoxDesign from 'generated/my-components/LviCustomTextBox';

export default class LviCustomTextBox extends LviCustomTextBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
