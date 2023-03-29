import FlCommentDesign from 'generated/my-components/FlComment';

export default class FlComment extends FlCommentDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
