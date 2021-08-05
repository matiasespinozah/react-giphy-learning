import getGifs from "../../helpers/getGifs";

describe('Pruebas en getGifts Fetch', () => {
  
  test('Debe traer 10 elementos', async () => {
    const gifs = await getGifs('Dragon Ball');
    expect(gifs.length).toBe(10);
  });

  test('No debe traer elementos', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
