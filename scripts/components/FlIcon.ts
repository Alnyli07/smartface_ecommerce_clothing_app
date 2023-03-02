import FlIconDesign from 'generated/my-components/FlIcon';

export default class FlIcon extends FlIconDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
