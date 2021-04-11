import React, { useState } from 'react'
import { Input, Select, Radio, Checkbox } from 'antd';
import { SearchOutlined, InfoCircleOutlined } from '@ant-design/icons';
const InputGroup = Input.Group;
const Option = Select.Option;

export default function SearchInputBox() {

  const [value, setValue] = useState('Exact');

  const handleDataChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div>
      <InputGroup compact>
        <Select style={{width: 90}} className="selectData" value={value}>
          <Radio.Group onChange={handleDataChange} >
          <Radio value='Exact'>
          Exact Phrase
          </Radio>
          <hr />
          <Radio value='All'>
          All Word
          <div>
              within <Input type="number" value="20" style={{width: "60px"}} /> words
            </div>
          </Radio>
          <hr />
          <Radio value='Any'>
          Any Word
          </Radio>
          <hr />
          <Checkbox value='Synonyms'>Use Synonyms</Checkbox>
          </Radio.Group>
        </Select>
        <Input
          style={{ width: '286px' }}
          suffix={comboSuffix}
          placeholder="Email"
        />
      </InputGroup>
    </div>
  )
}

const comboSuffix = (
  <>
    <InfoCircleOutlined />&nbsp;<SearchOutlined />
  </>
)

