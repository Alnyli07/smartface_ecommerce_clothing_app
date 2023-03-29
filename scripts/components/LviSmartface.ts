import LviSmartfaceDesign from 'generated/my-components/LviSmartface';

export default class LviSmartface extends LviSmartfaceDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
