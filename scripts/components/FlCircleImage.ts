import FlCircleImageDesign from 'generated/my-components/FlCircleImage';

export default class FlCircleImage extends FlCircleImageDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
