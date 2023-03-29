import GviMiniTagDesign from 'generated/my-components/GviMiniTag';

export default class GviMiniTag extends GviMiniTagDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
