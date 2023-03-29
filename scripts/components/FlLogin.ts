import FlLoginDesign from 'generated/my-components/FlLogin';

export default class FlLogin extends FlLoginDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
