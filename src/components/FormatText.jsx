import React, { useState } from 'react';
import { Input, Button, message, Card } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  const handleCopySuccess = () => {
    message.success('Formatted text copied to clipboard!');
  };

  return (
    <Card title={title}>
      <div>
        <div style={{ marginBottom: 8 }}>
          <div style={{ border: '1px solid #ccc', padding: 8 }}>{formatTemplate}</div>
        </div>
        {paramNames.map((paramName) => (
          <Input
            key={paramName}
            style={{ marginBottom: 8 }}
            placeholder={paramName}
            onChange={(e) => handleInputChange(paramName, e.target.value)}
          />
        ))}
        {Object.keys(paramValues).length > 0 && (
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center' }}>
            <div style={{ border: '1px solid #ccc', padding: 8, flexGrow: 1 }}>
              {formatText()}
            </div>
            <CopyToClipboard text={formatText()} onCopy={handleCopySuccess}>
              <Button icon={<CopyOutlined />} style={{ marginLeft: 8 }} />
            </CopyToClipboard>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FormatTextComponent;
