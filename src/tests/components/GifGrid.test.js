import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifts";
jest.mock('../../hooks/useFetchGifts')

describe('Prueba en <GifGrid />', () => {

  const category = 'dragon ball';
  

  test('Debe de mostrarse bien ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost//image.jpg',
      title: 'un titulo'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
  
  
});
