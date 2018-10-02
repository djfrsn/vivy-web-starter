import React, { Component } from 'react';
// RichText is give to us
import { RichText } from 'prismic-reactjs';
// A new API request that will create in just a tick
import { getBlogPostAPI } from '../api/blog';
import linkResolver from '../helpers';

export default class BlogPost extends Component {
  static async getInitialProps(context) {
    // we get the slug of the post so that we can
    // query the API with it
    const { slug } = context.query;
    const response = await getBlogPostAPI(slug);
    return {
      post: response
    };
  }

  render() {
    const post = this.props.post.data;
    return (
      <div>
        <article>
          <h1>{post.title.length ? post.title[0].text : ''}</h1>
          {/* Here we pass our rich text field to Prismics RichText renderer, along with our linkResolver */}
          {RichText.render(post.body, linkResolver)}
        </article>
      </div>
    );
  }
}
