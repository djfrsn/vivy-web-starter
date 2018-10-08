import React from 'react';
import Router from 'next/router';
import { RichText } from 'prismic-reactjs';
import axios from 'axios';

import linkResolver from '../../helpers/linkResolver';
import { getPageContentText } from '../../helpers/prismic';

export default class Home extends React.Component {
  executePayment = async () => {
    const {
      data: { redirect_url }
    } = await axios.post('/api/pay', {
      items: [
        {
          name: 'item',
          sku: 'item',
          price: '1.00',
          currency: 'USD',
          quantity: 1
        }
      ],
      amount: {
        currency: 'USD',
        total: '1.00'
      }
    });

    Router.push(redirect_url);
  };

  render() {
    const { content_ready, content } = this.props;
    const { header_title } = getPageContentText({
      content,
      keys: ['header_title']
    }).text;

    return (
      <div className="vivy-starter">
        <h1>{header_title}</h1>
        {content_ready && RichText.render(content.body, linkResolver)}
        <button onClick={this.executePayment.bind(this)}>pay</button>
      </div>
    );
  }
}
