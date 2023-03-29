import LviTextViewDesign from 'generated/my-components/LviTextView';

export default class LviTextView extends LviTextViewDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
