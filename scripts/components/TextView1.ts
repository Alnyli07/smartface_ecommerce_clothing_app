import TextView1Design from 'generated/my-components/TextView1';

export default class TextView1 extends TextView1Design {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
