import GviGridPhotoPickerItemDesign from 'generated/my-components/GviGridPhotoPickerItem';

export default class GviGridPhotoPickerItem extends GviGridPhotoPickerItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
