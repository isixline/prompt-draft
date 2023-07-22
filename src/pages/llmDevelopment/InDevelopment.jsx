import React from 'react';
import FormatText from '../../components/FormatText'

const Page = () => {
  const paramNames = ['text'];
  const formatTemplate = '转换 {{text}} 为大写下划线格式';

  return (
    <div>
      <FormatText paramNames={paramNames} formatTemplate={formatTemplate} />
    </div>
  );
};

export default Page;
