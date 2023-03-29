import FlDiningMenuExtendedDesign from 'generated/my-components/FlDiningMenuExtended';

export default class FlDiningMenuExtended extends FlDiningMenuExtendedDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
