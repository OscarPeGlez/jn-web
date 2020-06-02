import React, { FC } from 'react';
import CreateProductModal from '../../components/modal-create-product';

const KitchenInventory: FC = () => {
  return (
    <>
      <CreateProductModal />
      <h1>Este es el faking listado de cocina :B</h1>
    </>
  );
};

export default KitchenInventory;
