import FlMenuItemDesign from 'generated/my-components/FlMenuItem';

export default class FlMenuItem extends FlMenuItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
