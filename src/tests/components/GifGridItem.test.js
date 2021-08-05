import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un titulo';
  const url = 'http://localhost/img.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);


  test('Debe mostrar el componente correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe tener la imagen igual al url y al alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test('Debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.props().className;
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
  
});
