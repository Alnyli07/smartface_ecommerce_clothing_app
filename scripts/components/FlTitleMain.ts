import FlTitleMainDesign from 'generated/my-components/FlTitleMain';

export default class FlTitleMain extends FlTitleMainDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
