import renderer from 'react-test-renderer';
import SpeedSelector from './SpeedSelector';


it('renders SpeedSelector correctly', () => {
    const setSpeed = jest.fn();
    const component = renderer.create(
        <SpeedSelector speed={"Slow"} setSpeed={setSpeed} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});