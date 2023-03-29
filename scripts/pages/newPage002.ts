import NewPage002Design from 'generated/pages/newPage002';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';

export default class NewPage002 extends withDismissAndBackButton(NewPage002Design) {
  constructor(private router?: Router, private route?: Route) {
    super({});
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
  }
}
