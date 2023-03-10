import PgIntro2Design from 'generated/pages/pgIntro2';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';

export default class PgIntro2 extends withDismissAndBackButton(PgIntro2Design) {
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
        this.flIconButton.on('touchEnded', () => {
            console.log('btb 22');
            this.router.push('/btb');
        });
    }
}
