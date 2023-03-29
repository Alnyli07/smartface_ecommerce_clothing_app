import LviCommentInputDesign from 'generated/my-components/LviCommentInput';

export default class LviCommentInput extends LviCommentInputDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
