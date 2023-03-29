import FlSingleBoxDesign from 'generated/my-components/FlSingleBox';

export default class FlSingleBox extends FlSingleBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
