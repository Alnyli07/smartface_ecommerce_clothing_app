import LviProfileSectionDesign from 'generated/my-components/LviProfileSection';

export default class LviProfileSection extends LviProfileSectionDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
