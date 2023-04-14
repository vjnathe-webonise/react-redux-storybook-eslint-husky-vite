import renderer from 'react-test-renderer';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

it('Login renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
