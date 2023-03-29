import FlTextWithCheckboxDesign from 'generated/my-components/FlTextWithCheckbox';

export default class FlTextWithCheckbox extends FlTextWithCheckboxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
