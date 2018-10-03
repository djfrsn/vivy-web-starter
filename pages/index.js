import App from '../components/App';
import { getPageAPI } from '../api/page';
import { getPageContent } from '../helpers/prismic';

import Home from '../components/vivy-kit/Home';
import '../components/index.scss';

const Index = props => (
  <App title="Vivy">
    <Home {...props} />
  </App>
);

Index.getInitialProps = async () => {
  const response = await getPageAPI({ content_type: 'home_page' });

  return getPageContent(response);
};

export default Index;
