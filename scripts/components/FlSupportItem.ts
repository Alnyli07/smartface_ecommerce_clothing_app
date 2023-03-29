import FlSupportItemDesign from 'generated/my-components/FlSupportItem';

export default class FlSupportItem extends FlSupportItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
