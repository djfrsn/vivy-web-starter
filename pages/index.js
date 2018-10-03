import App from '../components/App';
import { getPageAPI } from '../api/page';

import Home from '../components/vivy-kit/Home';
import '../components/index.scss';

const Index = ({ content = [] }) => (
  <App title="Vivy">
    <Home content={content[0]} />
  </App>
);

Index.getInitialProps = async () => {
  // Here we call the API and request 5 documents
  const response = await getPageAPI({ content_type: 'home_page' });
  return {
    content: response.results
  };
};

export default Index;
