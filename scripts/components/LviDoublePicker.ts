import LviDoublePickerDesign from 'generated/my-components/LviDoublePicker';

export default class LviDoublePicker extends LviDoublePickerDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
