import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';

// shared storage of legislators
let messageTemplateData = null;

function TemplateOption({ template: { label, msg }, onSelect = () => {} }) {
  const handleClick = useCallback(() => {
    onSelect(msg);
  }, [msg, onSelect]);

  return <li onClick={handleClick}>{label}</li>;
}

function MessageTemplates({ onSelect = () => {}, ...props }) {
  const [templates, setTemplates] = useState(messageTemplateData);

  useEffect(() => {
    if (templates) return;

    import('data/messageTemplates.json').then(data =>
      setTemplates((messageTemplateData = data.default.rows))
    );
  }, [templates]);

  if (!templates) return null;

  return (
    <ul data-label="加點內容：" {...props}>
      {templates.map((template, idx) => (
        <TemplateOption key={idx} template={template} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export default styled(MessageTemplates)`
  list-style: none;
  margin: 0 0 8px;
  padding: 0;

  &::before {
    content: attr(data-label);
  }

  li {
    display: inline-block;
    padding: 4px 6px;
    margin: 0 0 4px 4px;
    font-size: 12px;
    border-radius: 30px;
    border: 1px solid currentColor;
    color: #ff5368;
    transition-property: color, background-color;
    transition-duration: 0.2s;

    &:hover {
      background-color: #ff5368;
      color: #fff;
    }
  }
`;
