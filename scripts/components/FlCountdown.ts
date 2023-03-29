import FlCountdownDesign from 'generated/my-components/FlCountdown';

export default class FlCountdown extends FlCountdownDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
