import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserNavigationComponent } from './component';

describe('MainComponent', () => {

	let component: UserNavigationComponent;
	let fixture: ComponentFixture<UserNavigationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ UserNavigationComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserNavigationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

});
