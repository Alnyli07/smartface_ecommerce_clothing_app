import FlCustomTextAreaDesign from 'generated/my-components/FlCustomTextArea';

export default class FlCustomTextArea extends FlCustomTextAreaDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
