import FlGenericContentDesign from 'generated/my-components/FlGenericContent';

export default class FlGenericContent extends FlGenericContentDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
