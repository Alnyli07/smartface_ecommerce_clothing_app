import LviSupportItemDesign from 'generated/my-components/LviSupportItem';

export default class LviSupportItem extends LviSupportItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
