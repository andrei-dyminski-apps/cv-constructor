import { useContext } from 'react';
import { DataContext } from '~/providers/data';

export const useData = () => {
  const data = useContext(DataContext);
  return data;
};
