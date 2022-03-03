import axiosFetch from '../config/axios';

export const getMovies = async (path: any) => {
  try {
    const { data } = await axiosFetch(path);
    return data;
  } catch (error: any) {
    console.log('Error: ', error.message);
  }
};
