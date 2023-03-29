import LviDiningMenuExtendedDesign from 'generated/my-components/LviDiningMenuExtended';

export default class LviDiningMenuExtended extends LviDiningMenuExtendedDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
