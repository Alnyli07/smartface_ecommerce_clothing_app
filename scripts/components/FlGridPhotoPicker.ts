import FlGridPhotoPickerDesign from 'generated/my-components/FlGridPhotoPicker';

export default class FlGridPhotoPicker extends FlGridPhotoPickerDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
