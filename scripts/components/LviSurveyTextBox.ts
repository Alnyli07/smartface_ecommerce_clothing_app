import LviSurveyTextBoxDesign from 'generated/my-components/LviSurveyTextBox';

export default class LviSurveyTextBox extends LviSurveyTextBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
