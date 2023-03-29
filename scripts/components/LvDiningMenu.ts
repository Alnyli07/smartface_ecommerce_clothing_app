import LvDiningMenuDesign from 'generated/my-components/LvDiningMenu';

export default class LvDiningMenu extends LvDiningMenuDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
