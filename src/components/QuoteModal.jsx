import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/contentData';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'rebar-detailing',
    tonnage: '100-500',
    message: '',
    fileName: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog quote-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {submitted ? (
          <div className="quote-success-box animate-fade-in" style={{ padding: '30px 20px' }}>
            <CheckCircle2 size={56} className="success-icon" />
            <h3>Proposal Request Submitted!</h3>
            <p>Thank you. Our estimation team will evaluate your specifications and respond within 24 hours at <strong>{formData.email}</strong>.</p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }} 
              className="btn-yellow"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="quote-modal-form">
            <div className="modal-header-tag">
              <span className="section-kicker">ACCUQUANT SERVICES</span>
              <h3 className="modal-form-title">
                Request a Free Project Proposal<span className="dot">.</span>
              </h3>
              <p className="modal-form-sub">
                Fill in your project specifications below. For immediate assistance, call <strong>{companyDetails.phoneUSA}</strong>.
              </p>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Direct Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input 
                  type="text" 
                  placeholder="Fabricator / Contractor / Engineering firm"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Service Required *</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="rebar-detailing">Rebar Detailing & BBS</option>
                  <option value="rebar-estimating">Rebar Estimating & Takeoff</option>
                  <option value="concrete-estimation">Concrete Take-Off & Formwork</option>
                  <option value="bim-3d">BIM – 3D Rebar Modeling</option>
                  <option value="cad-drafting">CAD Drafting & Conversion</option>
                </select>
              </div>
              <div className="form-group">
                <label>Approx. Tonnage</label>
                <select 
                  value={formData.tonnage}
                  onChange={(e) => setFormData({...formData, tonnage: e.target.value})}
                >
                  <option value="under-100">&lt; 100 Tons</option>
                  <option value="100-500">100 &ndash; 500 Tons</option>
                  <option value="500-1500">500 &ndash; 1,500 Tons</option>
                  <option value="1500-plus">Over 1,500 Tons</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Project Scope / Timeline</label>
              <textarea 
                rows="2"
                placeholder="Describe your structure type, schedule constraints, and codes needed..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="form-actions-row">
              <button type="button" onClick={onClose} className="btn-outline-dark">
                Cancel
              </button>
              <button type="submit" className="btn-yellow">
                <span>SUBMIT PROPOSAL REQUEST</span>
                <Send size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
