import FlEventDesign from 'generated/my-components/FlEvent';

export default class FlEvent extends FlEventDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
