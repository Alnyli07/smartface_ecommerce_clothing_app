import FlDoubleLineWithProgressDesign from 'generated/my-components/FlDoubleLineWithProgress';

export default class FlDoubleLineWithProgress extends FlDoubleLineWithProgressDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
