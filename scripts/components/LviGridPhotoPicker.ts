import LviGridPhotoPickerDesign from 'generated/my-components/LviGridPhotoPicker';

export default class LviGridPhotoPicker extends LviGridPhotoPickerDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
