import Page1Design from 'generated/pages/page1';
import Label from '@smartface/native/ui/label';
import { Route, Router } from '@smartface/router';
import { styleableComponentMixin } from '@smartface/styling-context';
import i18n from '@smartface/i18n';

class StyleableLabel extends styleableComponentMixin(Label) { }

export default class Page1 extends Page1Design {
    private disposeables: (() => void)[] = [];
    lbl: StyleableLabel;
    constructor(private router?: Router, private route?: Route) {
        super({});
        this.lbl = new StyleableLabel();
        console.log('[page1] constructor 1');
    }

    setTexts() {
        //this.btnNext.text = i18n.instance.t('nextPage');
        //this.lbl.text = i18n.instance.t('runtimeLabel');
    }

    /**
     * @event onShow
     * This event is called when a page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        console.log('[page1] onShow');
        this.disposeables.push(
            this.btnNext.on('press', () => {
                this.router.push('page2', { message: i18n.instance.t('helloWorld') });
            })
        );

        // this.button2.nativeObject.setMinimumHeight(1);
        //this.button2.nativeObject.setMinHeight(0);

        // this.button2.padding = 0;
        //this.button2.minHeight = 0


        setTimeout(() => {
            const iamge1 = this.imageView1.image
            const iamge2 = this.imageView1_1_1.image
            //@ts-ignore
            console.warn('- imagevie1', this.imageView1.getPosition(), { w: iamge1.width, h: iamge1.height });
            //@ts-ignore
            console.warn('- imageView1_1_1', this.imageView1_1_1.getPosition(), { w: iamge2.width, h: iamge2.height });
            console.warn('- flexLayout6', this.flexLayout6.getPosition());
        }, 5000);
    }
    /**
     * @event onLoad
     * This event is called once when page is created.
     */
    onLoad() {
        super.onLoad();
        this.setTexts();
        console.log('[page1] onLoad');
        this.headerBar.leftItemEnabled = false;
        /*
        this.addChild(this.lbl, 'page1lbl1unique', 'sf-label', (userProps: Record<string, any>) => {
            return { ...userProps };
        });
*/

        //this.button2.padding = 0;
        //this.button2.minHeight = 0
        //this.button2.nativeObject.setMinimumHeight(1);

    }

    onHide(): void {
        this.dispose();
    }

    dispose(): void {
        this.disposeables.forEach((item) => item());
    }
}
