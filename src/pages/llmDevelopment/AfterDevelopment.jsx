import React from 'react';
import FormatText from '../../components/FormatText'

const Page = () => {
  const paramNames = ['name', 'age', 'city'];
  const formatTemplate = 'Hello, my name is {{name}}, I am {{age}} years old, and I live in {{city}}.';

  return (
    <div>
      <FormatText paramNames={paramNames} formatTemplate={formatTemplate} />
    </div>
  );
};

export default Page;
