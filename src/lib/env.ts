export const getEnvVars = () => {
  const apiKey = import.meta.env.API_KEY;

  if (!apiKey) throw new Error('No api key');

  return {
    apiKey,
  };
};
