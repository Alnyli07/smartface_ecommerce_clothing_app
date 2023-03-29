import GviSingleColDesign from 'generated/my-components/GviSingleCol';

export default class GviSingleCol extends GviSingleColDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
