import FlSurveyCheckBoxDesign from 'generated/my-components/FlSurveyCheckBox';

export default class FlSurveyCheckBox extends FlSurveyCheckBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
