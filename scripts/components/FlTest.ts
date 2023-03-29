import FlTestDesign from 'generated/my-components/FlTest';

export default class FlTest extends FlTestDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
