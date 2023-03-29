import LviNLineDesign from 'generated/my-components/LviNLine';

export default class LviNLine extends LviNLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
