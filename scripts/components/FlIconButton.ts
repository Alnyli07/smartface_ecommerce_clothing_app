import FlIconButtonDesign from 'generated/my-components/FlIconButton';

export default class FlIconButton extends FlIconButtonDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
