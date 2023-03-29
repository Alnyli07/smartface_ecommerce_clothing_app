import FlAdvertDesign from 'generated/my-components/FlAdvert';

export default class FlAdvert extends FlAdvertDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
