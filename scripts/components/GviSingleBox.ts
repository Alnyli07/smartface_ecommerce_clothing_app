import GviSingleBoxDesign from 'generated/my-components/GviSingleBox';

export default class GviSingleBox extends GviSingleBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
