import useFetchGifs from "../../hooks/useFetchGifts";
import { renderHook } from '@testing-library/react-hooks';

describe('Prueba del custom hook "useFetchGifts"', () => {
  
  test('Debe de retornar el estado inicial ', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball') );
    const { data, loading } =  result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe retornar un arreglo de imagenes con el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball') );
    await waitForNextUpdate();

    const { data, loading } =  result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
  
  
});
