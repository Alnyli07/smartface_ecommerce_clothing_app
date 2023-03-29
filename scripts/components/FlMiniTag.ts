import FlMiniTagDesign from 'generated/my-components/FlMiniTag';

export default class FlMiniTag extends FlMiniTagDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
