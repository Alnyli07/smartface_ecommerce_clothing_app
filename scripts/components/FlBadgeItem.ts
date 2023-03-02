import FlBadgeItemDesign from 'generated/my-components/FlBadgeItem';

export default class FlBadgeItem extends FlBadgeItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
