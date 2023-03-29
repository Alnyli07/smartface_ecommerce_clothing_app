import FlDiningDailyMenuDesign from 'generated/my-components/FlDiningDailyMenu';

export default class FlDiningDailyMenu extends FlDiningDailyMenuDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
