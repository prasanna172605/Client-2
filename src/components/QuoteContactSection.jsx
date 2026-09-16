import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Upload } from 'lucide-react';
import { companyDetails } from '../data/contentData';

export default function QuoteContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'rebar-detailing',
    tonnage: '100-500',
    timeline: 'immediate',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <section id="contact" className="contact-quote-section overflow-hidden">
      <div className="container">
        {/* Header - Reveal Zoom */}
        <div className="center-header reveal-zoom">
          <div className="section-kicker">
            <span className="animated-line"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Request A Quote & Contact<span className="dot glow-dot">.</span>
          </h2>
          <p className="section-subtitle">
            Send us your structural drawings, tender documents, or detailing inquiries. Our senior estimation team will review and reply with a competitive proposal within 24 hours.
          </p>
        </div>

        <div className="contact-quote-grid">
          {/* Left Column: Office Info - Slides from Left */}
          <div className="contact-info-panel reveal-left">
            <h3 className="panel-title">Let’s Discuss Your Next Project</h3>
            <p className="panel-desc">
              Whether you need full structural rebar detailing for high-rise towers, fast takeoff for tender submission, or 3D BIM clash coordination, our team is at your disposal.
            </p>

            <div className="info-cards-list">
              <div className="info-card hover-shift">
                <div className="info-icon-box">
                  <Phone size={20} className="info-icon" />
                </div>
                <div className="info-text">
                  <span className="info-label">Direct Lines:</span>
                  <a href={`tel:${companyDetails.phoneUSA}`} className="info-val">{companyDetails.phoneUSA} (USA Toll-Free)</a>
                  <a href={`tel:${companyDetails.phoneIndia}`} className="info-val">{companyDetails.phoneIndia} (India Office)</a>
                </div>
              </div>

              <div className="info-card hover-shift">
                <div className="info-icon-box">
                  <Mail size={20} className="info-icon" />
                </div>
                <div className="info-text">
                  <span className="info-label">Email Inquiries:</span>
                  <a href={`mailto:${companyDetails.email}`} className="info-val">{companyDetails.email}</a>
                  <a href={`mailto:${companyDetails.quoteEmail}`} className="info-val">{companyDetails.quoteEmail}</a>
                </div>
              </div>

              <div className="info-card hover-shift">
                <div className="info-icon-box">
                  <MapPin size={20} className="info-icon" />
                </div>
                <div className="info-text">
                  <span className="info-label">Engineering Hub:</span>
                  <span className="info-val">Trichy, Tamil Nadu, India</span>
                  <span className="info-subval">Serving Clients in USA, Europe, Middle East & Worldwide</span>
                </div>
              </div>

              <div className="info-card hover-shift">
                <div className="info-icon-box">
                  <Clock size={20} className="info-icon" />
                </div>
                <div className="info-text">
                  <span className="info-label">Working Hours:</span>
                  <span className="info-val">Monday &ndash; Saturday: 8:00 AM &ndash; 7:00 PM EST</span>
                  <span className="info-subval">24/7 Dedicated Support for Active Fabrication Schedules</span>
                </div>
              </div>
            </div>

            <div className="guarantee-box float-slow">
              <CheckCircle2 size={24} className="text-yellow pulse-icon" />
              <div>
                <strong>Guaranteed 24-Hour RFQ Turnaround</strong>
                <p>Send your structural PDFs or CAD files and get a preliminary scope review and estimate within 1 business day.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form - Slides from Right */}
          <div className="quote-form-panel reveal-right">
            {submitted ? (
              <div className="quote-success-box anim-zoom-in">
                <CheckCircle2 size={56} className="success-icon pulse-icon" />
                <h3>Thank You!</h3>
                <p>Your quote request has been received by the Accuquant Services estimation department. A senior rebar engineer will contact you shortly at <strong>{formData.email}</strong>.</p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      service: 'rebar-detailing',
                      tonnage: '100-500',
                      timeline: 'immediate',
                      message: '',
                      fileName: ''
                    });
                  }}
                  className="btn-yellow btn-shimmer"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-header-bar">
                  <h4>Request Detailing / Estimating Quote</h4>
                  <span className="free-tag pulse-subtle">100% Free & No Obligation</span>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. john@contractor.com"
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
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company / Firm Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Metro Reinforcing Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Service Needed *</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="rebar-detailing">Rebar Detailing & BBS</option>
                      <option value="rebar-estimating">Rebar Estimating & Takeoff</option>
                      <option value="concrete-estimation">Concrete Estimation & Formwork</option>
                      <option value="bim-3d">BIM – 3D Rebar Modeling</option>
                      <option value="cad-drafting">CAD Drafting & Conversion</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Estimated Steel Tonnage</label>
                    <select 
                      value={formData.tonnage}
                      onChange={(e) => setFormData({...formData, tonnage: e.target.value})}
                    >
                      <option value="under-100">Less than 100 Tons</option>
                      <option value="100-500">100 &ndash; 500 Tons</option>
                      <option value="500-1500">500 &ndash; 1,500 Tons</option>
                      <option value="1500-plus">Over 1,500 Tons</option>
                      <option value="unknown">Not sure / Need assessment</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Notes / Details</label>
                  <textarea 
                    rows="3" 
                    placeholder="Provide project type (residential, commercial, highway), required codes (ACI, CRSI), and schedule deadlines..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {/* File Upload Mockup */}
                <div className="form-group">
                  <label className="upload-box-label">
                    <input 
                      type="file" 
                      className="d-none"
                      onChange={handleFileChange}
                      accept=".pdf,.dwg,.dxf,.zip,.rar,.xlsx"
                    />
                    <div className="upload-box-content hover-glow">
                      <Upload size={22} className="text-yellow" />
                      <div>
                        <span className="upload-text">
                          {formData.fileName ? `Selected: ${formData.fileName}` : 'Attach Drawing Set / Scope PDF (Optional)'}
                        </span>
                        <span className="upload-hint">PDF, DWG, DXF, ZIP up to 50MB</span>
                      </div>
                    </div>
                  </label>
                </div>

                <button type="submit" className="btn-yellow w-100 submit-btn btn-shimmer">
                  <span>SEND QUOTE REQUEST</span>
                  <Send size={16} className="btn-arrow" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
