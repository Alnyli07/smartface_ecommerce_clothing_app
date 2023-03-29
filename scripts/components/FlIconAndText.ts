import FlIconAndTextDesign from 'generated/my-components/FlIconAndText';

export default class FlIconAndText extends FlIconAndTextDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
