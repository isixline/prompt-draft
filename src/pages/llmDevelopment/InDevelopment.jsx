import React from 'react';
import FormatText from '../../components/FormatText'

const Page = () => {
  const promptTemplates = [
    {title: '代码检查', paramNames: ['code'], formatTemplate: '请帮我检查下以下代码 \n {{code}}'}
  ]

  return (
    <div>
      {promptTemplates.map((template) => (
        <FormatText key={template.title} {...template} />
      ))}
    </div>
  );
};

export default Page;
