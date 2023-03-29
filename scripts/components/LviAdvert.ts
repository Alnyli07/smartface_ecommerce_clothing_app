import LviAdvertDesign from 'generated/my-components/LviAdvert';

export default class LviAdvert extends LviAdvertDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
