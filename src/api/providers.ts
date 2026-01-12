import type { Provider } from '../app/types';

const getProviders = async (): Promise<Provider[]> => {
  const response = await fetch('/data/providers.json');

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  return data.providers as Provider[];
};

export default getProviders;
