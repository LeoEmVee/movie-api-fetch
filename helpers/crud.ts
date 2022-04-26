import axiosFetch from '../config/axios';

export const getMovies = async (path: string) => {
  try {
    const { data } = await axiosFetch(path);
    return data;
  } catch (error: unknown) {
    throw new Error(`error: ${error}`);
  }
};
