import FlSingleLineDesign from 'generated/my-components/FlSingleLine';

export default class FlSingleLine extends FlSingleLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
