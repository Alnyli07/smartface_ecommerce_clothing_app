import LviCommentDesign from 'generated/my-components/LviComment';

export default class LviComment extends LviCommentDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
