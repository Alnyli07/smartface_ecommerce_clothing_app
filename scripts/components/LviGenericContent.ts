import LviGenericContentDesign from 'generated/my-components/LviGenericContent';

export default class LviGenericContent extends LviGenericContentDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
