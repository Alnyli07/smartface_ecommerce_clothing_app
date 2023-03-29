import FlGridPhotoPickerItemDesign from 'generated/my-components/FlGridPhotoPickerItem';

export default class FlGridPhotoPickerItem extends FlGridPhotoPickerItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
