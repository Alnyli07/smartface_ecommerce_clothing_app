import LviSingleLineDesign from 'generated/my-components/LviSingleLine';

export default class LviSingleLine extends LviSingleLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
