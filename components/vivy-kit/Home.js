import { RichText } from 'prismic-reactjs';

import linkResolver from '../../helpers/linkResolver';

export default ({ content_ready, content }) => {
  return (
    <div className="vivy-starter">
      <h1>{content_ready && content.header_title[0].text}</h1>
      {content_ready && RichText.render(content.body, linkResolver)}
    </div>
  );
};
