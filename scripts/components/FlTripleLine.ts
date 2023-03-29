import FlTripleLineDesign from 'generated/my-components/FlTripleLine';

export default class FlTripleLine extends FlTripleLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
