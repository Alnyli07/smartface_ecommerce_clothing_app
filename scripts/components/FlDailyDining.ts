import FlDailyDiningDesign from 'generated/my-components/FlDailyDining';

export default class FlDailyDining extends FlDailyDiningDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
