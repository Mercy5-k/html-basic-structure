const fs = require('fs');
const assert = require('assert');

describe('HTML Structure', () => {
  let html;

  before(() => {
    html = fs.readFileSync('index.html', 'utf8');
  });

  it('has a DOCTYPE tag', () => {
    assert.match(html, /<!DOCTYPE html>/i);
  });

  it('has opening and closing <html> tags', () => {
    assert.match(html, /<html.*?>[\s\S]*<\/html>/i);
  });

  it('has <head> and <body> tags nested in the <html> tag', () => {
    assert.match(html, /<head>[\s\S]*<\/head>/i);
    assert.match(html, /<body>[\s\S]*<\/body>/i);
  });

  it('includes a <title> tag inside <head>', () => {
    assert.match(html, /<title>.*<\/title>/i);
  });

  it('includes a <link> tag inside <head>', () => {
    assert.match(html, /<link.*href=.*>/i);
  });

  it('has a comment in the HTML', () => {
    assert.match(html, /<!--[\s\S]*-->/);
  });

  it('has the lang="en" attribute in <html>', () => {
    assert.match(html, /<html[^>]*lang="en"[^>]*>/i);
  });
});
