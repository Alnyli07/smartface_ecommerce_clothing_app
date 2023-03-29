import FlHorizontalImageAndTextArrayDesign from 'generated/my-components/FlHorizontalImageAndTextArray';

export default class FlHorizontalImageAndTextArray extends FlHorizontalImageAndTextArrayDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
