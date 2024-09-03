import React from 'react';
import BasicForm from '@/components/house/create/BasicForm';
import ExpandableSection from '@/components/ExpandableSection';

const CreateHouse: React.FC = () => {
  return (
    <ExpandableSection title="Thông tin cơ bản">
      <BasicForm />
    </ExpandableSection>
  );
};

export default CreateHouse;
