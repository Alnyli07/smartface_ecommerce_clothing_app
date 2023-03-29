import FlNLineDesign from 'generated/my-components/FlNLine';

export default class FlNLine extends FlNLineDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
