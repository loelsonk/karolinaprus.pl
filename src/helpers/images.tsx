import React from 'react'
import { PostImage } from '@/components/PostImage/PostImage';

export const getImage = node => {
  if (node.name === 'img') {
    return node;
  } else if (node.children != null) {
    for (let index = 0; index < node.children.length; index++) {
      let image = getImage(node.children[index]);
      if (image != null) return image;
    }
  }
};

export const replaceMedia = node => {
  if (node.name === 'p') {
    const image = getImage(node);
    if (image != null) {
      return <PostImage src={image.attribs.src} alt={image.attribs.alt} width={image.attribs.width}/>;
    }
  }
};
