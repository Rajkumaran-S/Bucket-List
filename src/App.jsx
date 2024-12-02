import React, { useState } from 'react';
// import './BucketTransfer.css';
import Bucket from './Bucket.jsx'

function BucketTransfer() {
  const [bucket1Items, setBucket1Items] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);
  const [bucket2Items, setBucket2Items] = useState([]);

  const handleAddItem = (item) => {
    setBucket1Items(bucket1Items.filter((i) => i !== item));
    setBucket2Items([...bucket2Items, item]);
  };

  const handleRemoveItem = (item) => {
    setBucket2Items(bucket2Items.filter((i) => i !== item));
    setBucket1Items([...bucket1Items, item]);
  };

  const handleAddAllItems = () => {
    setBucket2Items([...bucket2Items, ...bucket1Items]);
    setBucket1Items([]);
  };

  const handleRemoveAllItems = () => {
    setBucket1Items([...bucket1Items, ...bucket2Items]);
    setBucket2Items([]);
  };

  return (
    <div>
      <Bucket 
      BucketTransfer = {BucketTransfer}
      bucket1Items = {bucket1Items}
      setBucket1Items = {setBucket1Items}
      bucket2Items = {bucket2Items}
      setBucket2Items = {setBucket2Items}
      handleAddItem = {handleAddItem}
      handleRemoveItem = {handleRemoveItem}
      handleAddAllItems = {handleAddAllItems}
      handleRemoveAllItems = {handleRemoveAllItems}
      />
    </div>
  );
}

export default BucketTransfer;
