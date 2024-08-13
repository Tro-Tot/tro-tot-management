import React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
type Props = {
    field: any
}

const SelectRole: React.FC<Props>= ({field}) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select your role" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="staff">Staff</SelectItem>
        <SelectItem value="tech">Technical Staff</SelectItem>
        <SelectItem value="manager">Manager</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default SelectRole