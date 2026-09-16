import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { companyDetails } from '../data/contentData';
import { WhatsappIcon } from './SocialIcons';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-contact">
          <a href={`tel:${companyDetails.phoneUSA.replace(/[^+\d]/g, '')}`} className="top-contact-item">
            <Phone size={14} className="top-icon" />
            <span className="hidden sm:inline">{companyDetails.phoneDisplay}</span>
            <span className="inline sm:hidden">{companyDetails.phoneUSA}</span>
          </a>
          <span className="divider d-none-xs">|</span>
          <a href={`mailto:${companyDetails.email}`} className="top-contact-item d-none-xs">
            <Mail size={14} className="top-icon" />
            <span>{companyDetails.email}</span>
          </a>
        </div>

        <div className="top-bar-social d-none-mobile">
          <span className="social-label">Message Us:</span>
          <a 
            href={`https://wa.me/${companyDetails.phoneUSA.replace(/[^+\d]/g, '')}`} 
            className="social-link" 
            title="WhatsApp" 
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
