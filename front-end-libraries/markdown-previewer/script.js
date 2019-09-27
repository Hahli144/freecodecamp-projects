var placeholderText = `# This is my Markdown Previewer.
***
## Here's some stuff you can do:
Hashtags of varying amounts, with text separated by a space make different sized headers: \`# text\`, \`## text\`, \`### text\`...
# 1 Hashtag,
## 2 hashtags,
### 3 Hashtags!
Text between backticks \` \`\` \` turns into \`code.\`

\`\`\`
Text between 3 backticks:     \`\`\`example text\`\`\`
Turns into a code block
\`\`\`


\`[text](http://example.com)\` to create a [Link](https://www.google.com).

*Asteriks around text for italic*, **double asteriks for bold**.

* Lists can be created
* With a single asterisk.
1. Numbered lists can be created
2. By numbering items.
>Blockquotes can be inserted with > symbols.

Images can be inserted with \`[text](http://linktoimage.jpg)\`.

![text](https://image.flaticon.com/icons/svg/1563/1563461.svg)`;

class PreviewRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: marked(placeholderText)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: marked(event.target.value)
    });
  }

  render() {
    return (
      <div id="react">
        <textarea onChange={this.handleChange} id="editor">
          {placeholderText}
        </textarea>
        <div
          dangerouslySetInnerHTML={{ __html: this.state.input }}
          id="preview"
        />
      </div>
    );
  }
}
ReactDOM.render(<PreviewRender />, document.getElementById("react"));

marked.setOptions({
  breaks: true
});
