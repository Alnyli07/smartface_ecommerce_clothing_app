import FlFavoriteDesign from 'generated/my-components/FlFavorite';

export default class FlFavorite extends FlFavoriteDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
