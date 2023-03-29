import FlCommentInputDesign from 'generated/my-components/FlCommentInput';

export default class FlCommentInput extends FlCommentInputDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
