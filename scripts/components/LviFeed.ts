import LviFeedDesign from 'generated/my-components/LviFeed';

export default class LviFeed extends LviFeedDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
