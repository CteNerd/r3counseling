import React, { useEffect } from "react";
import { Row, Col, Typography, Space } from "antd";
import LeadForm from "../../components/LeadForm";
import "./contact.css";

const { Title, Paragraph } = Typography;

export default function Contact() {
  useEffect(() => {
    // SEO optimization
    document.title = "Contact Us | Release Restore Redefine Counseling | Martinez & Kennesaw, GA";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Contact Release Restore Redefine Counseling in Martinez and Kennesaw, GA. Get in touch for therapy services, EMDR intensives, and wellness offerings. Call (706) 750-8906 or use our online form."
      );
    }

    // Add structured data for contact page
    const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Release Restore Redefine Counseling",
      "description": "Contact information and form for Release Restore Redefine Counseling services",
      "url": "https://r3counseling.com/contact",
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Release Restore Redefine Counseling",
        "telephone": "(706) 750-8906",
        "email": "R3counseling@counselingsecure.com",
        "areaServed": ["Martinez, GA", "Kennesaw, GA"],
        "location": [
          {
            "@type": "Place",
            "name": "R3 Counseling Martinez Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4210 Columbia Rd",
              "addressLocality": "Martinez",
              "addressRegion": "GA",
              "postalCode": "30907"
            }
          },
          {
            "@type": "Place",
            "name": "R3 Counseling Kennesaw Office",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1301 Shiloh Rd. Suite 1240",
              "addressLocality": "Kennesaw",
              "addressRegion": "GA",
              "postalCode": "30144"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(contactSchema);
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('ContactPage')) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <div className="contact-hero-content">
              <Title level={1} className="contact-title">
                Book a Consultation
              </Title>
              <Paragraph className="contact-subtitle">
                Ready to move forward? Reach out to explore EMDR Intensives,
                trauma-focused therapy, referral pathways, or clinical
                supervision support.
              </Paragraph>
              <Paragraph className="contact-milestone">
                Led by Tiffany Luke, Goldman Sachs One Million Black Women in
                Business graduate.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>

      <div className="contact-content">
        <Row gutter={[48, 48]} justify="center">
          <Col xs={24} lg={12}>
            <div className="contact-info">
              <Title level={2}>Get in Touch</Title>
              <Space direction="vertical" size={24} style={{ width: "100%" }}>
                <div>
                  <Title level={4}>Phone</Title>
                  <Paragraph>
                    <a href="tel:+17067508906" className="contact-link">
                      (706) 750-8906
                    </a>
                  </Paragraph>
                </div>
                
                <div>
                  <Title level={4}>Address</Title>
                  <Paragraph>
                    4210 Columbia Rd<br />
                    Martinez, GA 30907
                  </Paragraph>
                  <Paragraph>
                    1301 Shiloh Rd. Suite 1240<br />
                    Kennesaw, GA 30144
                  </Paragraph>
                </div>

                <div>
                  <Title level={4}>Office Hours</Title>
                  <Paragraph>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday & Sunday: By appointment
                  </Paragraph>
                </div>

                <div>
                  <Title level={4}>Services</Title>
                  <Paragraph>
                    • Individual Therapy<br />
                    • EMDR Intensives<br />
                    • Clinical Supervision<br />
                    • Community Wellness Programs<br />
                    • Referral Partner Coordination<br />
                    • Virtual Sessions Available
                  </Paragraph>
                </div>
              </Space>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <LeadForm />
          </Col>
        </Row>
      </div>
    </div>
  );
}