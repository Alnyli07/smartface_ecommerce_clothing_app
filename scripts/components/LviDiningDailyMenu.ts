import LviDiningDailyMenuDesign from 'generated/my-components/LviDiningDailyMenu';

export default class LviDiningDailyMenu extends LviDiningDailyMenuDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
