import FlShareQrDesign from 'generated/my-components/FlShareQr';

export default class FlShareQr extends FlShareQrDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
