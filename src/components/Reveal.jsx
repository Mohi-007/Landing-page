import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
