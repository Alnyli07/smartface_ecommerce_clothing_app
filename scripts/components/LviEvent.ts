import LviEventDesign from 'generated/my-components/LviEvent';

export default class LviEvent extends LviEventDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
