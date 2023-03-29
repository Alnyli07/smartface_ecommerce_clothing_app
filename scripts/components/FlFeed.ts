import FlFeedDesign from 'generated/my-components/FlFeed';

export default class FlFeed extends FlFeedDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
