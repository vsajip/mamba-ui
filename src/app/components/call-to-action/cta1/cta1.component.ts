import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-cta1',
	templateUrl: './cta1.component.html',
})
export class Cta1Component extends BaseComponent {
	constructor() {
		super();
	}
}
