import FlPickerDesign from 'generated/my-components/FlPicker';

export default class FlPicker extends FlPickerDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
