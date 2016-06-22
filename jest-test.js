jest.disableAutomock();

jest.unmock('mongoose');
import mongoose from 'mongoose';

describe('jest', () => {
  it('should create mongoose model', () => {
    const schema = new mongoose.Schema({
      title:  String,
      author: String,
      body:   String,
    });
    const Article = mongoose.model('Article', schema);
    const article = new Article({ author: 'nodkz' });
    console.log('--->', article.author, '!! Jest works !!', '<---');
  });
});
