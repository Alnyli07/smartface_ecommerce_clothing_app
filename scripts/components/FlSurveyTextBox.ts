import FlSurveyTextBoxDesign from 'generated/my-components/FlSurveyTextBox';

export default class FlSurveyTextBox extends FlSurveyTextBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
