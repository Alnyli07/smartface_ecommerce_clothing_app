import LviDoubleLineDesign from 'generated/my-components/LviDoubleLine';

export default class LviDoubleLine extends LviDoubleLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
