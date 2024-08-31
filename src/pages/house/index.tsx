import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';

const CustomSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      className="ring-1 ring-slate-400 px-4 py-3 rounded-lg "
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div className="flex items-center justify-between space-x-4 w-[600px]">
        <h1 className="text-2xl font-semibold">Thông tin cơ bản</h1>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center">
            <ArrowDown
              color="gray"
              size={25}
              className={`transition-transform duration-300 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-3 CollapsibleContent px-5">
        <div className="space-y-2 mb-5">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Tên bất động sản
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const House = () => {
  return (
    <main className="flex justify-center mt-3">
      <CustomSection />
    </main>
  );
};

export default House;
