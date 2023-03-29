import FlSurveyQuestionDesign from 'generated/my-components/FlSurveyQuestion';

export default class FlSurveyQuestion extends FlSurveyQuestionDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
