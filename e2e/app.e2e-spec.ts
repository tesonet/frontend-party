import { SeniorFrontendPartyPage } from './app.po';

describe('senior-frontend-party App', () => {

	let page: SeniorFrontendPartyPage;

	beforeEach(() => {
		page = new SeniorFrontendPartyPage();
	});

	it('should display welcome message', done => {
		page.navigateTo();
		page.getParagraphText()
			.then(
				msg => expect(msg).toEqual('Welcome to app!!')
			)
			.then(
				done,
				done.fail
			);
	});

});
