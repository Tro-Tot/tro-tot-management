import React, { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowDown, CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LatLngTuple } from 'leaflet';
import { PropertyType } from '@/enums/propertyTypes';
import { CollapsibleContent } from '@/components/ui/collapsible';
import MapComponent from '@/components/map';
import InputLabel from '@/components/InputLabel';
import { vietnamApi } from '@/utils/api/map/vietnamApi';

const BasicForm: React.FC = () => {
  const [openTypeCombobox, setOpenTypeCombobox] = useState<boolean>(false);
  const [openProvinceCombobox, setOpenProvinceCombobox] =
    useState<boolean>(false);
  const [openDistrictCombobox, setOpenDistrictCombobox] =
    useState<boolean>(false);
  const [openWardCombobox, setOpenWardCombobox] = useState<boolean>(false);
  const [propertyType, setPropertyType] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [ward, setWard] = useState<string>('');
  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);
  const [searchTermProvince, setSearchTermProvince] = useState<string>('');
  const [searchTermDistrict, setSearchTermDistrict] = useState<string>('');
  const [searchTermWard, setSearchTermWard] = useState<string>('');
  const position: LatLngTuple = [20.865139, 106.68383];

  // Fetch provinces when the component mounts
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const data = await vietnamApi.getProvinces();
        setProvinces(data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchProvinces();
  }, []);

  // Reset districts and wards when the province changes
  useEffect(() => {
    if (province) {
      const selectedProvince = provinces.find((p) => p.name === province);
      if (selectedProvince) {
        setDistricts(selectedProvince.districts);
      } else {
        setDistricts([]);
      }
    } else {
      setDistricts([]);
    }
    setDistrict('');
    setWards([]);
    setWard('');
  }, [province, provinces]);

  useEffect(() => {
    if (district) {
      const selectedDistrict = districts.find((d) => d.name === district);
      if (selectedDistrict) {
        setWards(selectedDistrict.wards);
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
    setWard(''); // Reset ward
  }, [district, districts]);

  const filteredProvinces = provinces.filter((prov) =>
    prov.name.toLowerCase().includes(searchTermProvince.toLowerCase())
  );

  const filteredDistricts = districts.filter((dist) =>
    dist.name.toLowerCase().includes(searchTermDistrict.toLowerCase())
  );

  const filteredWards = wards.filter((ward) =>
    ward.name.toLowerCase().includes(searchTermWard.toLowerCase())
  );

  return (
    <CollapsibleContent className="pt-3 CollapsibleContent px-5">
      {/* Name */}
      <InputLabel label="Tên bất động sản" htmlFor="property-name" required>
        <Input
          type="text"
          id="property-name"
          placeholder="Nhập tên bất động sản"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </InputLabel>

      {/* Type */}
      <InputLabel label="Loại bất động sản" htmlFor="property-type" required>
        <Popover open={openTypeCombobox} onOpenChange={setOpenTypeCombobox}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className={`w-full justify-between ${
                !propertyType ? 'text-gray-400' : ''
              }`}
            >
              {propertyType
                ? PropertyType[propertyType as keyof typeof PropertyType]
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
                        setPropertyType(
                          currentValue === propertyType ? '' : currentValue
                        );
                        setOpenTypeCombobox(false);
                      }}
                    >
                      {label}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          propertyType === key ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </InputLabel>

      {/* City, Province, District, and Ward in Grid */}
      <section>
        <div className="grid grid-cols-2 gap-4">
          {/* City, Province */}
          <InputLabel
            label="Tỉnh, thành phố"
            htmlFor="property-province"
            required
          >
            <Popover
              open={openProvinceCombobox}
              onOpenChange={setOpenProvinceCombobox}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={`w-full justify-between ${
                    !province ? 'text-gray-400' : ''
                  }`}
                >
                  {province || 'Chọn tỉnh/thành phố'}
                  <ArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="PopoverContent"
                sideOffset={5}
              >
                <Command>
                  <CommandInput
                    placeholder="Tìm kiếm tỉnh/thành phố..."
                    value={searchTermProvince}
                    onValueChange={(value) => setSearchTermProvince(value)}
                  />
                  <CommandList>
                    <CommandEmpty>No provinces found.</CommandEmpty>
                    <CommandGroup>
                      {filteredProvinces.map((prov) => (
                        <CommandItem
                          key={prov.code}
                          value={prov.name}
                          onSelect={(currentValue) => {
                            setProvince(
                              currentValue === province ? '' : currentValue
                            );
                            setOpenProvinceCombobox(false);
                          }}
                        >
                          {prov.name}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              province === prov.name
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </InputLabel>

          {/* District */}
          <InputLabel label="Quận, huyện" htmlFor="property-district" required>
            <Popover
              open={openDistrictCombobox}
              onOpenChange={setOpenDistrictCombobox}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={`w-full justify-between ${
                    !district ? 'text-gray-400' : ''
                  }`}
                >
                  {district || 'Chọn quận/huyện'}
                  <ArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className="PopoverContent"
                sideOffset={5}
              >
                <Command>
                  <CommandInput
                    placeholder="Tìm kiếm quận/huyện..."
                    value={searchTermDistrict}
                    onValueChange={(value) => setSearchTermDistrict(value)}
                  />
                  <CommandList>
                    <CommandEmpty>No districts found.</CommandEmpty>
                    <CommandGroup>
                      {filteredDistricts.map((dist) => (
                        <CommandItem
                          key={dist.code}
                          value={dist.name}
                          onSelect={(currentValue) => {
                            setDistrict(
                              currentValue === district ? '' : currentValue
                            );
                            setOpenDistrictCombobox(false);
                          }}
                        >
                          {dist.name}
                          <CheckIcon
                            className={cn(
                              'ml-auto h-4 w-4',
                              district === dist.name
                                ? 'opacity-100'
                                : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </InputLabel>
        </div>
        {/* Ward */}
        <InputLabel label="Phường, xã" htmlFor="property-ward" required>
          <Popover open={openWardCombobox} onOpenChange={setOpenWardCombobox}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className={`w-full justify-between ${
                  !ward ? 'text-gray-400' : ''
                }`}
              >
                {ward || 'Chọn phường/xã'}
                <ArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="PopoverContent"
              sideOffset={5}
            >
              <Command>
                <CommandInput
                  placeholder="Tìm kiếm phường/xã..."
                  value={searchTermWard}
                  onValueChange={(value) => setSearchTermWard(value)}
                />
                <CommandList>
                  <CommandEmpty>No wards found.</CommandEmpty>
                  <CommandGroup>
                    {filteredWards.map((wardItem) => (
                      <CommandItem
                        key={wardItem.code}
                        value={wardItem.name}
                        onSelect={(currentValue) => {
                          setWard(currentValue === ward ? '' : currentValue);
                          setOpenWardCombobox(false);
                        }}
                      >
                        {wardItem.name}
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            ward === wardItem.name ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </InputLabel>
      </section>

      {/* Address details */}
      <InputLabel label="Số nhà, tên đường" htmlFor="property-address" required>
        <Input
          type="text"
          id="property-address"
          placeholder="Nhập địa chỉ chi tiết"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </InputLabel>

      {/* Title */}
      <InputLabel
        label="Tựa đề thể hiện trên tin đăng"
        htmlFor="property-title"
        required
      >
        <Input
          type="text"
          id="property-title"
          placeholder="Nhập tựa đề tin đăng"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </InputLabel>

      {/* Map */}
      <InputLabel label="Vị trí trên bản đồ" htmlFor="property-map" required>
        <div className="w-full h-64 rounded-md border border-gray-300 overflow-hidden">
          <MapComponent
            center={[16.047079, 108.20623]}
            zoom={5}
            scrollWheelZoom={true}
            markers={[
              {
                position: [21.028511, 105.804817],
                address: 'Hồ Gươm, Hà Nội',
                markerName: 'Hoan Kiem Lake',
                markerImg: 'https://example.com/hoan_kiem_lake.jpg',
                link: '/detail/hoan-kiem-lake',
              },
              {
                position: [10.776889, 106.700806],
                address: 'Nhà thờ Đức Bà, TP. HCM',
                markerName: 'Notre Dame Cathedral',
                markerImg: 'https://example.com/notre_dame_cathedral.jpg',
                link: '/detail/notre-dame-cathedral',
              },
              {
                position: [16.071786, 108.224378],
                address: 'Cầu Rồng, Đà Nẵng',
                markerName: 'Dragon Bridge',
                markerImg: 'https://example.com/dragon_bridge.jpg',
                link: '/detail/dragon-bridge',
              },
              {
                position: [22.396428, 114.109497],
                address: 'Vịnh Hạ Long, Quảng Ninh',
                markerName: 'Ha Long Bay',
                markerImg: 'https://example.com/ha_long_bay.jpg',
                link: '/detail/ha-long-bay',
              },
            ]}
          />
        </div>
      </InputLabel>
    </CollapsibleContent>
  );
};

export default BasicForm;
