import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownComponent = ({ markdownContent }) => {
  if (!markdownContent) {
    // Return null or any other desired fallback
    return null;
  }

  return (
    <div className='code_block'>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;