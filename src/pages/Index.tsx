import React, { useState } from 'react';
import { Check, Play, Smartphone, Tv, Monitor, Wifi, Shield, Clock, Star, ChevronDown, ChevronUp, MessageCircle, Send, Zap, Globe, Award, Users } from 'lucide-react';

const Index = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>('2-connections');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pricingData = {
    '1-connection': {
      name: "1 Connection",
      prices: {
        'starter': { name: 'Starter', price: '€12.99', period: '/month', savings: '', duration: '1 Month' },
        'pro': { name: 'Pro', price: '€32.99', period: '/3 months', savings: 'Save 15%', duration: '3 Months' },
        'max': { name: 'Max', price: '€59.99', period: '/6 months', savings: 'Save 23%', duration: '6 Months' },
        'legend': { name: 'Legend', price: '€99.99', period: '/12 months', savings: 'Save 36% – Best Value', duration: '12 Months' }
      }
    },
    '2-connections': {
      name: "2 Connections",
      prices: {
        'starter': { name: 'Starter', price: '€19.99', period: '/month', savings: '', duration: '1 Month' },
        'pro': { name: 'Pro', price: '€49.99', period: '/3 months', savings: 'Save 17%', duration: '3 Months' },
        'max': { name: 'Max', price: '€89.99', period: '/6 months', savings: 'Save 25%', duration: '6 Months' },
        'legend': { name: 'Legend', price: '€149.99', period: '/12 months', savings: 'Save 38% – Best Value', duration: '12 Months' }
      }
    },
    '3-connections': {
      name: "3 Connections",
      prices: {
        'starter': { name: 'Starter', price: '€24.99', period: '/month', savings: '', duration: '1 Month' },
        'pro': { name: 'Pro', price: '€64.99', period: '/3 months', savings: 'Save 13%', duration: '3 Months' },
        'max': { name: 'Max', price: '€119.99', period: '/6 months', savings: 'Save 20%', duration: '6 Months' },
        'legend': { name: 'Legend', price: '€199.99', period: '/12 months', savings: 'Save 33% – Best Value', duration: '12 Months' }
      }
    }
  };

  const features = [
    {
      icon: <Tv className="h-8 w-8" />,
      title: "30,000+ Live Channels",
      description: "Access to premium sports, movies, news, and entertainment channels worldwide"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "120,000+ VOD Content",
      description: "Massive library of movies, TV series, documentaries in multiple languages"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Anti-Freeze Technology",
      description: "Advanced streaming technology ensures smooth playback without buffering"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "99.9% Uptime",
      description: "Reliable service with guaranteed uptime and instant technical support"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Anti-Freeze Technology",
      description: "Advanced streaming with zero buffering"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Stable Servers",
      description: "Enterprise-grade infrastructure"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "99.9% Uptime",
      description: "Guaranteed reliable service"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Worldwide Access",
      description: "Stream from anywhere in the world"
    }
  ];

  const devices = [
    { icon: <Smartphone className="h-12 w-12" />, name: "Android/iOS" },
    { icon: <Tv className="h-12 w-12" />, name: "Smart TV" },
    { icon: <Monitor className="h-12 w-12" />, name: "PC/Mac" },
    { icon: <Wifi className="h-12 w-12" />, name: "Android Box" },
    { icon: <Play className="h-12 w-12" />, name: "Firestick" },
    { icon: <Monitor className="h-12 w-12" />, name: "MAG Box" },
    { icon: <Tv className="h-12 w-12" />, name: "Enigma2" },
    { icon: <Monitor className="h-12 w-12" />, name: "Windows" }
  ];

  const contentProviders = [
    { name: "UEFA Champions League", category: "Sports", img: "Logo_UEFA_Champions_League.png" },
    { name: "La Liga", category: "Sports", img: "laliga.webp" },
    { name: "Premier League", category: "Sports", img: "premier_ligue.png" },
    { name: "Netflix", category: "Streaming", img: "netflix.png" },
    { name: "HBO Max", category: "Streaming", img: "hbo_max.png" },
    { name: "Amazon Prime", category: "Streaming", img: "prime_now.png" },
    { name: "Disney+", category: "Streaming", img: "diseny+.png" },
    { name: "ESPN", category: "Sports", img: "espn.png" },
    { name: "Sky Sports", category: "Sports", img: "sky_sports.png" },
    { name: "BBC", category: "News", img: "bbc.png" },
    { name: "CNN", category: "News", img: "cnn.png" },
    { name: "Discovery", category: "Documentary", img: "discovery.png" }
  ];

  const faqs = [
    {
      question: "What is IPTV and how does GeniusTV work?",
      answer: "IPTV (Internet Protocol Television) delivers TV content over the internet. GeniusTV uses advanced streaming technology to provide 30,000+ channels and 120,000+ movies/shows with anti-freeze technology for smooth viewing on any device."
    },
    {
      question: "What devices are compatible with GeniusTV?",
      answer: "GeniusTV works on all major devices: Smart TVs (Samsung, LG, Sony), Android/iOS phones/tablets, computers (Windows/Mac), Firestick, Android boxes, MAG boxes, and Enigma2 receivers."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 24-hour free trial so you can test our service quality, channel selection, and streaming performance before subscribing."
    },
    {
      question: "What internet speed do I need for GeniusTV?",
      answer: "Minimum 10 Mbps for HD streaming, 25 Mbps for 4K content. Higher speeds ensure better quality and allow multiple simultaneous connections."
    },
    {
      question: "How many devices can I use simultaneously?",
      answer: "Depends on your plan: 1 Connection (1 device), 2 Connections (2 devices), 3 Connections (3 devices). Each connection allows one simultaneous stream."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top border-bottom border-danger">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2" href="#" style={{color: '#e50914'}}>
            <span className="text-white">Genius</span><span className="text-danger">TV</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#content">Content</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#devices">Devices</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section min-vh-100 d-flex align-items-center position-relative">
        <div className="hero-overlay position-absolute w-100 h-100" style={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(229,9,20,0.3))',
          zIndex: 1
        }}></div>
        <div className="container position-relative" style={{zIndex: 2, paddingTop: '100px'}}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4 text-gradient">
                Premium IPTV Experience with <span className="text-danger">GeniusTV</span>
              </h1>
              {/* <p className="lead mb-4 text-light fs-5">
                Stream 30,000+ live channels and 120,000+ movies in stunning 4K quality. 
                Experience the future of entertainment with anti-freeze technology and 99.9% uptime guarantee.
              </p> */}
              <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                <a href="#pricing" className="btn btn-danger btn-lg px-5 py-3 fw-bold">
                  Subscribe Now
                </a>
                <a href="https://wa.me/+33644657615" className="btn btn-outline-light btn-lg px-5 py-3">
                  Free Trial
                </a>
              </div>
              <div className="d-flex align-items-center gap-4 text-light">
                <div className="d-flex align-items-center gap-2">
                  <Star className="text-warning" size={20} />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Shield className="text-success" size={20} />
                  <span>99.9% Uptime</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Users className="text-info" size={20} />
                  <span>50,000+ Users</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image-container position-relative">
                <div className="streaming-preview bg-dark rounded-4 p-4 shadow-lg border border-danger">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex gap-2">
                      <div className="bg-danger rounded-circle" style={{width: '12px', height: '12px'}}></div>
                      <div className="bg-warning rounded-circle" style={{width: '12px', height: '12px'}}></div>
                      <div className="bg-success rounded-circle" style={{width: '12px', height: '12px'}}></div>
                    </div>
                    <span className="text-danger fw-bold">LIVE</span>
                  </div>
                  <div className="ratio ratio-16x9 bg-secondary rounded-3 mb-3 position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <Play className="text-white" size={48} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-sm text-light">
                    <span>Premium Sports HD</span>
                    <span>4K Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Providers Section */}
      <section id="content" className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Premium <span className="text-danger">Content</span></h2>
            <p className="lead text-light">Access the world's best entertainment and sports</p>
          </div>
          <div className="row g-3">
            {contentProviders.map((provider, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="card bg-black border-secondary h-100 p-3 text-center">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={`/images/providers/${provider.img}`}
                      alt={provider.name}
                      style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 12 }}
                    />
                    {/* <span className="text-white mb-1" style={{ fontSize: '12px' }}>{provider.name}</span> */}
                    <small className="text-danger">{provider.category}</small>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Premium <span className="text-danger">Features</span></h2>
            <p className="lead text-light">Experience the ultimate IPTV service with cutting-edge features</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card bg-black border-danger h-100 feature-card">
                  <div className="card-body text-center p-4">
                    <div className="text-danger mb-3">{feature.icon}</div>
                    <h5 className="card-title text-white mb-3">{feature.title}</h5>
                    <p className="card-text text-light">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GeniusTV */}
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Why Choose <span className="text-danger">GeniusTV</span>?</h2>
            <p className="lead text-light">Industry-leading technology and service quality</p>
          </div>
          <div className="row g-4">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="text-center">
                  <div className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <span className="text-white">{feature.icon}</span>
                  </div>
                  <h5 className="text-white mb-2">{feature.title}</h5>
                  <p className="text-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Choose Your <span className="text-danger">Plan</span></h2>
            <p className="lead text-light">Flexible pricing for every household size</p>
          </div>
          
          {/* Plan Selector */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-8">
              <div className="d-flex justify-content-center gap-2 mb-4">
                {Object.keys(pricingData).map((planKey) => (
                  <button
                    key={planKey}
                    onClick={() => setSelectedPlan(planKey)}
                    className={`btn px-4 py-2 ${selectedPlan === planKey ? 'btn-danger' : 'btn-outline-danger'}`}
                  >
                    {pricingData[planKey as keyof typeof pricingData].name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="row g-4 justify-content-center">
            {Object.entries(pricingData[selectedPlan as keyof typeof pricingData].prices).map(([planKey, details], index) => (
              <div key={planKey} className="col-lg-3 col-md-6">
                <div className={`card h-100 pricing-card ${planKey === 'legend' ? 'border-success popular-plan position-relative' : 'border-secondary'} bg-dark`}>
                  {/* {planKey === 'legend' && (
                    <div className="position-relative w-100" style={{zIndex: 10 , textAlign: 'end'}}>
                      <span className="position-absolute badge bg-success px-3 py-2 fs-6 fw-bold" 
                      style={{position: 'absolute',  right: '0px', zIndex: 10}}
                      >Best Value</span>
                    </div>
                  )} */}
                  <div className="card-body p-4 text-center">
                    <h4 className="card-title text-white mb-1">{details.name}</h4>
                    <p className="text-light small mb-3">{details.duration}</p>
                    <div className="mb-3">
                      <span className="display-6 fw-bold text-danger">{details.price}</span>
                      <div className="text-light">{details.period}</div>
                      {details.savings && (
                        <div className={`badge mt-2 ${planKey === 'legend' ? 'bg-success fs-6' : 'bg-warning text-dark'}`}>
                          {details.savings}
                        </div>
                      )}
                    </div>
                    <ul className="list-unstyled mb-4 text-start">
                      <li className="mb-2 d-flex align-items-center">
                        <Check className="text-success me-2 flex-shrink-0" size={16} />
                        <span className="text-light">{pricingData[selectedPlan as keyof typeof pricingData].name}</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <Check className="text-success me-2 flex-shrink-0" size={16} />
                        <span className="text-light">30,000+ Live TV Channels</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <Check className="text-success me-2 flex-shrink-0" size={16} />
                        <span className="text-light">120,000+ Movies & Series</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <Check className="text-success me-2 flex-shrink-0" size={16} />
                        <span className="text-light">4K Ultra HD Quality</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <Check className="text-success me-2 flex-shrink-0" size={16} />
                        <span className="text-light">Anti-Freeze Technology</span>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <Check className="text-success me-2 flex-shrink-0" size={16} />
                        <span className="text-light">24/7 Premium Support</span>
                      </li>
                    </ul>
                    <a href="https://wa.me/+33644657615" className={`btn w-100 btn-lg fw-bold ${planKey === 'legend' ? 'btn-success' : 'btn-outline-danger'}`}>
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section id="devices" className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Compatible <span className="text-danger">Devices</span></h2>
            <p className="lead text-light">Stream on any device, anywhere, anytime</p>
          </div>
          <div className="row g-4 text-center">
            {devices.map((device, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="device-card p-4 rounded-3 bg-black border border-secondary">
                  <div className="text-danger mb-3">{device.icon}</div>
                  <h6 className="text-white">{device.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-5 bg-black">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Frequently Asked <span className="text-danger">Questions</span></h2>
            <p className="lead text-light">Get answers to common questions about our IPTV service</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item bg-dark border-secondary mb-3">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button bg-dark text-white border-0 fw-bold"
                        type="button"
                        onClick={() => toggleFaq(index)}
                        style={{boxShadow: 'none'}}
                      >
                        {faq.question}
                        {activeFaq === index ? <ChevronUp className="ms-auto" size={20} /> : <ChevronDown className="ms-auto" size={20} />}
                      </button>
                    </h3>
                    <div className={`accordion-collapse ${activeFaq === index ? 'show' : 'collapse'}`}>
                      <div className="accordion-body bg-dark text-light border-top border-secondary">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Get in <span className="text-danger">Touch</span></h2>
            <p className="lead text-light">24/7 support ready to help you start streaming</p>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-md-6">
              <div className="card bg-black border-danger h-100">
                <div className="card-body text-center p-4">
                  <MessageCircle className="text-success mb-3" size={48} />
                  <h4 className="text-white mb-3">WhatsApp Support</h4>
                  <p className="text-light mb-4">Get instant support and start your free trial</p>
                  <a href="https://wa.me/+33644657615" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg fw-bold">
                    Chat on WhatsApp
                  </a>
                  <p className="text-light mt-2 small">+39 644 657 615</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-black border-danger h-100">
                <div className="card-body text-center p-4">
                  <Send className="text-info mb-3" size={48} />
                  <h4 className="text-white mb-3">Telegram Support</h4>
                  <p className="text-light mb-4">Connect with us for quick assistance</p>
                  <a href="https://t.me/genuistv" target="_blank" rel="noopener noreferrer" className="btn btn-info btn-lg fw-bold">
                    Message on Telegram
                  </a>
                  <p className="text-light mt-2 small">@genuistv</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-top border-danger py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="d-flex align-items-center mb-3">
                <span className="fw-bold fs-3">
                  <span className="text-white">Genius</span><span className="text-danger">TV</span>
                </span>
              </div>
              <p className="text-light mb-4">
                Premium IPTV service with 30,000+ channels and 120,000+ movies. 
                Experience entertainment like never before.
              </p>
              <div className="d-flex gap-3">
                <a href="https://wa.me/+33644657615" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  <MessageCircle size={20} />
                </a>
                <a href="https://t.me/genuistv" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                  <Send size={20} />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-white mb-3">Service</h5>
              <ul className="list-unstyled">
                <li><a href="#features" className="text-light text-decoration-none">Features</a></li>
                <li><a href="#pricing" className="text-light text-decoration-none">Pricing</a></li>
                <li><a href="#devices" className="text-light text-decoration-none">Devices</a></li>
                <li><a href="#content" className="text-light text-decoration-none">Content</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-white mb-3">Support</h5>
              <ul className="list-unstyled">
                <li><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
                <li><a href="https://wa.me/+33644657615" className="text-light text-decoration-none">Free Trial</a></li>
                <li><a href="#" className="text-light text-decoration-none">Setup Guide</a></li>
              </ul>
            </div>
            <div className="col-lg-4 mb-4">
              <h5 className="text-white mb-3">Contact Info</h5>
              <p className="text-light mb-2">
                <strong>WhatsApp:</strong> +39 644 657 615
              </p>
              <p className="text-light mb-2">
                <strong>Telegram:</strong> @genuistv
              </p>
              <p className="text-light">
                <strong>Support:</strong> 24/7 Available
              </p>
            </div>
          </div>
          <hr className="border-danger my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-light mb-0">&copy; 2024 GeniusTV. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-light mb-0">Premium IPTV Service | 99.9% Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
