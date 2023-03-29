import LviDoubleLineWithBigImageDesign from 'generated/my-components/LviDoubleLineWithBigImage';

export default class LviDoubleLineWithBigImage extends LviDoubleLineWithBigImageDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
