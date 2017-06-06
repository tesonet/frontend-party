import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerListComponent } from './component';

describe('ServerListComponent', () => {

	let component: ServerListComponent;
	let fixture: ComponentFixture<ServerListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ServerListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ServerListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

});
