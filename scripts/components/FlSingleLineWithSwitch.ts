import FlSingleLineWithSwitchDesign from 'generated/my-components/FlSingleLineWithSwitch';

export default class FlSingleLineWithSwitch extends FlSingleLineWithSwitchDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
