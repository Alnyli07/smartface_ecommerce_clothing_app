import LviDiningMenuDesign from 'generated/my-components/LviDiningMenu';

export default class LviDiningMenu extends LviDiningMenuDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
