import LviSurveyDesign from 'generated/my-components/LviSurvey';

export default class LviSurvey extends LviSurveyDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
