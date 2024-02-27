import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownComponent = ({ markdownContent }) => {
  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;