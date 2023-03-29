import LviSingleLineWithSwitchDesign from 'generated/my-components/LviSingleLineWithSwitch';

export default class LviSingleLineWithSwitch extends LviSingleLineWithSwitchDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
