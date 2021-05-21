import React from 'react';

function Categories({el}) {
  return (
    <ul>
      {el.categories.map(item => (
      <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default Categories;
