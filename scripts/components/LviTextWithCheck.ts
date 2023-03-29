import LviTextWithCheckDesign from 'generated/my-components/LviTextWithCheck';

export default class LviTextWithCheck extends LviTextWithCheckDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
