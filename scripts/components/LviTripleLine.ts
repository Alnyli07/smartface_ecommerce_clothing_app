import LviTripleLineDesign from 'generated/my-components/LviTripleLine';

export default class LviTripleLine extends LviTripleLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
