import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ArrowDown, CheckIcon } from 'lucide-react';
import { FC, ReactNode, useState } from 'react';
import { PropertyType } from '@/enums/propertyTypes';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}

const FormField: FC<FormFieldProps> = ({
  label,
  htmlFor,
  required = false,
  children,
}) => {
  return (
    <div className="space-y-2 mb-5">
      <Label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      {children}
    </div>
  );
};

const CustomExpandSection: FC = () => {
  const [openCollap, setOpenCollap] = useState<boolean>(false);
  const [openCombobox, setOpenCombobox] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const position: LatLngTuple = [20.865139, 106.68383];
  return (
    <Collapsible
      className="ring-1 ring-slate-400 px-4 py-3 rounded-lg"
      open={openCollap}
      onOpenChange={setOpenCollap}
    >
      <div className="flex items-center justify-between space-x-4 w-[600px]">
        <h1 className="text-2xl font-semibold">Thông tin cơ bản</h1>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center">
            <ArrowDown
              color="gray"
              size={25}
              className={`transition-transform duration-300 ${
                openCollap ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="pt-3 CollapsibleContent px-5">
        {/* Name */}
        <FormField label="Tên bất động sản" htmlFor="property-name" required>
          <Input
            type="text"
            id="property-name"
            placeholder="Nhập tên bất động sản"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </FormField>

        {/* Type */}
        <FormField label="Loại bất động sản" htmlFor="property-type" required>
          <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className={`w-full justify-between ${
                  !value ? 'text-gray-400' : ''
                }`}
              >
                {value
                  ? PropertyType[value as keyof typeof PropertyType]
                  : 'Chọn'}
                <ArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="PopoverContent"
              sideOffset={5}
            >
              <Command>
                <CommandList>
                  <CommandEmpty>No property type found.</CommandEmpty>
                  <CommandGroup>
                    {Object.entries(PropertyType).map(([key, label]) => (
                      <CommandItem
                        key={key}
                        value={key}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpenCombobox(false);
                        }}
                      >
                        {label}
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            value === key ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </FormField>

        {/* Address */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            {/* City, Province */}
            <FormField label="Tỉnh, thành phố" htmlFor="property-name" required>
              <Input
                type="text"
                id="property-name"
                placeholder="Chọn"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </FormField>

            {/* District */}
            <FormField label="Quận, huyện" htmlFor="property-type" required>
              <Input
                type="text"
                id="property-type"
                placeholder="Nhập loại bất động sản"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </FormField>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* City, Province */}
            <FormField label="Tỉnh, thành phố" htmlFor="property-name" required>
              <Input
                type="text"
                id="property-name"
                placeholder="Nhập tên bất động sản"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </FormField>

            {/* District */}
            <FormField label="Quận, huyện" htmlFor="property-type" required>
              <Input
                type="text"
                id="property-type"
                placeholder="Nhập loại bất động sản"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </FormField>
          </div>
        </section>

        {/* Adrress details */}
        <FormField label="Số nhà, tên đường" htmlFor="property-name" required>
          <Input
            type="text"
            id="property-name"
            placeholder="Nhập tên bất động sản"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </FormField>

        {/* Title */}
        <FormField
          label="Tựa đề thể hiện trên tin đăng"
          htmlFor="property-name"
          required
        >
          <Input
            type="text"
            id="property-name"
            placeholder="Nhập tên bất động sản"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </FormField>

        {/* Map */}
        <FormField label="Vị trí trên bản đồ" htmlFor="property-map" required>
          <div className="w-full h-64 rounded-md border border-gray-300 overflow-hidden">
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="w-full h-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </FormField>
      </CollapsibleContent>
    </Collapsible>
  );
};

const CreateHouse = () => {
  const position: LatLngTuple = [20.865139, 106.68383];
  return (
    <>
      <CustomExpandSection />
    </>
  );
};

export default CreateHouse;
