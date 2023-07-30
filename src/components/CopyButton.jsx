import React from 'react';
import { Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';

const Component = ({ text }) => {
    const handleCopySuccess = () => {
        message.success('copy success!');
    };

    return (
        <CopyToClipboard text={text} onCopy={handleCopySuccess}>
            <Button icon={<CopyOutlined />} />
        </CopyToClipboard>
    );
};

export default Component;
