import { RichText } from 'prismic-reactjs';

import linkResolver from '../../helpers/linkResolver';

export default ({ content }) => {
  const content_available = content.data;
  console.log(content);
  return (
    <div className="vivy-starter">
      <h1>{content_available && content.data.header_title[0].text}</h1>
      {content_available && RichText.render(content.data.body, linkResolver)}
    </div>
  );
};
