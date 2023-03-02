import GvShopItemDesign from 'generated/my-components/GvShopItem';

export default class GvShopItem extends GvShopItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
