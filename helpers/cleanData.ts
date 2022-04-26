export const cleanData = (data: any[], notNull: any) => {
  
  return data
    .filter((x: any) => x[notNull] !== null)
    .map((movie: any) => {
      return movie;
    });
};
