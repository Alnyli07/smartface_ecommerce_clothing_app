import FlHorizontalImageAndTextArrayItemDesign from 'generated/my-components/FlHorizontalImageAndTextArrayItem';

export default class FlHorizontalImageAndTextArrayItem extends FlHorizontalImageAndTextArrayItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
