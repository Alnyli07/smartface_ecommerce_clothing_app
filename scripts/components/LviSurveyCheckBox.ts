import LviSurveyCheckBoxDesign from 'generated/my-components/LviSurveyCheckBox';

export default class LviSurveyCheckBox extends LviSurveyCheckBoxDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
