import React, { useEffect } from 'react';

const HubSpotForm = ({ region, portalId, formId }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div id="hubspotForm">Loading...</div>
    </div>
  );
};

export const HubSpotPricingContactForm = ({ formId }) => {
  if (!formId) return null;

  return '';
};
