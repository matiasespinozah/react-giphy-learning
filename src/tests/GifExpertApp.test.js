import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas de <GifExpertApp />', () => {
  
  test('Debe de mostrarse correctamente ', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
    const categories = ['Pokemon', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
  
  
});
