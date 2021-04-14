import '../../marketing-decl.d';
import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

const MarketingApp: React.FC = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
