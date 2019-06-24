import Dotenv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Dotenv.config({ path: '.env.production' });
Enzyme.configure({ adapter: new Adapter() });
