import FlShuttleMapDesign from 'generated/my-components/FlShuttleMap';

export default class FlShuttleMap extends FlShuttleMapDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
