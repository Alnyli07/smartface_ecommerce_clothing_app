import LviPickerDesign from 'generated/my-components/LviPicker';

export default class LviPicker extends LviPickerDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
