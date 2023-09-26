import React from 'react';
import { MenuCard } from '../components/MenuCard';
import { PRODUCTS_DATA } from '../data/data';

function MenuCardPage() {
  return (
    <MenuCard products={PRODUCTS_DATA} />
  );
}

export default MenuCardPage;