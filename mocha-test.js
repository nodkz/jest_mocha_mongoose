import { expect } from 'chai';
import mongoose from 'mongoose';

describe('mocha', () => {
  it('works!', () => {
    const schema = new mongoose.Schema({
      title:  String,
      author: String,
      body:   String,
    });
    const Article = mongoose.model('Article', schema);
    const article = new Article({ author: 'nodkz' });
    console.log('--->', article.author, '!! Mocha works !!', '<---');
  });
});
