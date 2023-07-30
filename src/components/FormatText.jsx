import React, { useState } from 'react';
import { Input, Card, Space } from 'antd';
import CopyButton from './CopyButton';
import TextArea from 'antd/es/input/TextArea';

const FormatTextComponent = ({ title, paramNames, formatTemplate }) => {
  const [paramValues, setParamValues] = useState({});

  const handleInputChange = (paramName, value) => {
    setParamValues((prevValues) => ({
      ...prevValues,
      [paramName]: value,
    }));
  };

  const formatText = () => {
    let formattedText = formatTemplate;
    Object.keys(paramValues).forEach((paramName) => {
      const regex = new RegExp(`{{${paramName}}}`, 'g');
      formattedText = formattedText.replace(regex, paramValues[paramName]);
    });
    return formattedText;
  };

  return (
    <Card title={title} extra={<CopyButton text={formatText()} />}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div>
          {formatTemplate}
        </div>
        {paramNames.map((paramName) => (
          <Input
            key={paramName}
            placeholder={paramName}
            onChange={(e) => handleInputChange(paramName, e.target.value)}
          />
        ))}
        {Object.keys(paramValues).length > 0 && (
          <TextArea value={formatText()} />
        )}
      </Space>
    </Card>
  );
};

export default FormatTextComponent;
