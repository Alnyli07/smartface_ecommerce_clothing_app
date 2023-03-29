import FlDoubleLineWithBigImageDesign from 'generated/my-components/FlDoubleLineWithBigImage';

export default class FlDoubleLineWithBigImage extends FlDoubleLineWithBigImageDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
