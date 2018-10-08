export function getPageContent(response) {
  return {
    content_ready: Object.keys(response).length > 0,
    content: response
  };
}

export function getPageContentText({ content, keys }) {
  console.log(content);

  return {
    text: keys.reduce((page_content, key) => {
      return {
        ...page_content,
        [key]: content[key][0].text
      };
    }, {})
  };
}
