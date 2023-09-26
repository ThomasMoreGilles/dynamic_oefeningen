import React from 'react';

const PICTURES_DATA = [
  {
    id: 1,
    credit:
      'https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Aziz Acharki',
    name: 'aziz-acharki-oEibQEiq2cM-unsplash.jpg',
  },
  {
    id: 2,
    credit:
      'https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Aziz Acharki',
    name: 'aziz-acharki-U3C79SeHa7k-unsplash.jpg',
  },
  {
    id: 3,
    credit:
      'https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Boudhayan Bardhan',
    name: 'boudhayan-bardhan-jITjssEKv2E-unsplash.jpg',
  },
  {
    id: 4,
    credit:
      'https://unsplash.com/@mkaminski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Madison Kaminski',
    name: 'madison-kaminski-3J_4c26cFpU-unsplash.jpg',
  },
];

const Picture = ({ picture }) => (
  <div>
    <img
      src={`images/${picture.name}`}
      alt={picture.author}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
    <a href={picture.credit}>{picture.author}</a>
  </div>
);

const PicturesPage = () => (
  <div>
    <h1>Pictures</h1>
    {PICTURES_DATA.map((picture) => (
      <Picture key={picture.id} picture={picture} />
    ))}
  </div>
);

export default PicturesPage;