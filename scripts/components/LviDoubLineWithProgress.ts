import LviDoubLineWithProgressDesign from 'generated/my-components/LviDoubLineWithProgress';

export default class LviDoubLineWithProgress extends LviDoubLineWithProgressDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
