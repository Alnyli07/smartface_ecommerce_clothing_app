import FlProfileSectionDesign from 'generated/my-components/FlProfileSection';

export default class FlProfileSection extends FlProfileSectionDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
