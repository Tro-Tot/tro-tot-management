import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
type Props = {
  field: any;
};

const SelectRole: React.FC<Props> = ({ field }) => {
  return (
      <Select
      onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className="w-full flex ">
          <SelectValue placeholder="Chọn vai trò" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="staff">Nhân viên quản lí</SelectItem>
            <SelectItem value="tech">Kiến trúc sư</SelectItem>
            <SelectItem value="manager">Quản lí</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  );
};

export default SelectRole;
