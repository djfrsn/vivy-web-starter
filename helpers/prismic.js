export const getPageContent = response => {
  return {
    content_ready: Object.keys(response).length > 0,
    content: response
  };
};
