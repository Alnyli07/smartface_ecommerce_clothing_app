import LviCustomTextAreaDesign from 'generated/my-components/LviCustomTextArea';

export default class LviCustomTextArea extends LviCustomTextAreaDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
