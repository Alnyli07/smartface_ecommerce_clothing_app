import FlListViewIndexDesign from 'generated/my-components/FlListViewIndex';

export default class FlListViewIndex extends FlListViewIndexDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
