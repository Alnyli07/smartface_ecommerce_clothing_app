import FlToastDesign from 'generated/my-components/FlToast';

export default class FlToast extends FlToastDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
