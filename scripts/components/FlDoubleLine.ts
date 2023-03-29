import FlDoubleLineDesign from 'generated/my-components/FlDoubleLine';

export default class FlDoubleLine extends FlDoubleLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
