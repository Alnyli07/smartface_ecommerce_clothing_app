import FlCheckDesign from 'generated/my-components/FlCheck';

export default class FlCheck extends FlCheckDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
