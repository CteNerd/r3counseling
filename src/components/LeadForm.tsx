import React, { useState } from "react";
import { Button, Input, Form, message, Row, Col, Card } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const API_URL = process.env.REACT_APP_API_URL;

interface FormData {
  name: string;
  email: string;
  message?: string;
}

export default function LeadForm() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values: FormData) => {
    if (!API_URL) {
      message.error("Contact form is not configured. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message || "",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        message.success("Thank you! Your message has been sent. We'll be in touch soon.");
        form.resetFields();
      } else {
        console.error("Contact form error:", result);
        if (result.error === "invalid_email") {
          message.error("Please enter a valid email address.");
        } else if (result.error === "captcha_failed") {
          message.error("Security verification failed. Please try again.");
        } else {
          message.error("Something went wrong. Please try again or contact us directly.");
        }
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      message.error("Unable to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card 
      title="Get in Touch" 
      style={{ maxWidth: 600, margin: "0 auto" }}
      className="lead-form-card"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        size="large"
        requiredMark={false}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="name"
              label="Full Name"
              rules={[
                { required: true, message: "Please enter your name" },
                { min: 2, message: "Name must be at least 2 characters" }
              ]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Your name" 
                disabled={isSubmitting}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="your.email@example.com" 
                disabled={isSubmitting}
              />
            </Form.Item>
          </Col>
        </Row>
        
        <Form.Item
          name="message"
          label="Message"
          rules={[
            { max: 1000, message: "Message cannot exceed 1000 characters" }
          ]}
        >
          <TextArea
            placeholder="Tell us how we can help you..."
            rows={4}
            disabled={isSubmitting}
            showCount
            maxLength={1000}
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0, textAlign: "center" }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={isSubmitting}
            size="large"
            style={{ minWidth: 120 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Form.Item>
      </Form>
      
      <div style={{ marginTop: 24, textAlign: "center", fontSize: "14px", color: "#666" }}>
        <p>
          You can also reach us directly at{" "}
          <a href="tel:+17067508906" style={{ color: "#1890ff" }}>
            (706) 750-8906
          </a>
        </p>
      </div>
    </Card>
  );
}