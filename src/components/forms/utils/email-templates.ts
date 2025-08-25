import { ContactUsData } from "@/components/forms/types/contact-us-interface";
import { InvoiceData } from "@/components/forms/types/project-wizard-interface";
import { formatCurrency } from "@/components/forms/utils/invoice-generator";

// utils/email-templates.ts
export const generateCustomerEmailTemplate = (invoiceData: InvoiceData): string => {
    return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #f8f9fa; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .invoice-details { background: #f8f9fa; padding: 15px; margin: 20px 0; border-radius: 5px; }
          .breakdown-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .breakdown-table th, .breakdown-table td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
          .breakdown-table th { background: #f8f9fa; }
          .total-row { font-weight: bold; font-size: 1.1em; background: #e9ecef; }
          .footer { background: #f8f9fa; padding: 15px; text-align: center; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="header">
        <img src="https://blinkav.co/images/logo-black.png" alt="Blinkav Logo" /><br><br>
          <h2>Thank You for Your Quote Request!</h2>
        </div>
        
        <div class="content">
          <p>Dear ${invoiceData.contactInfo.name},</p>
          
          <p>Thank you for requesting a quote for your ${invoiceData.projectType} project. Below is your detailed estimate:</p>
          
          <div class="invoice-details">
            <h3>Quote Details</h3>
            <p><strong>Quote Number:</strong> ${invoiceData.invoiceNumber}</p>
            <p><strong>Date:</strong> ${new Date(invoiceData.date).toLocaleDateString()}</p>
            <p><strong>Valid Until:</strong> ${new Date(invoiceData.dueDate).toLocaleDateString()}</p>
          </div>
          
          <h3>Project Information</h3>
          <ul>
            <li><strong>Project Type:</strong> ${invoiceData.projectType}</li>
            <li><strong>Property Type:</strong> ${invoiceData.propertyType}</li>
            <li><strong>Building Description:</strong> ${invoiceData.propertySubtype}</li>
            <li><strong>Room Count:</strong> ${invoiceData.roomCount}</li>
            <li><strong>Existing Wiring:</strong> ${invoiceData.hasExistingWiring}</li>
          </ul>
          
          <h3>Cost Breakdown</h3>
          <table class="breakdown-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${invoiceData.pricing.breakdown.map(item => `
                <tr>
                  <td>${item.label}</td>
                  <td>${formatCurrency(item.price)}</td>
                </tr>
              `).join('')}
              <tr class="total-row">
                <td>Total Estimated Cost</td>
                <td>${formatCurrency(invoiceData.pricing.total)}</td>
              </tr>
            </tbody>
          </table>
          
          <div class="invoice-details">
            <h4>Important Notes:</h4>
            <ul>
              <li>This is an estimated quote based on the information provided</li>
              <li>Final pricing may vary after site inspection</li>
              <li>Quote is valid for 30 days from the date above</li>
              <li>All prices include materials and installation</li>
            </ul>
          </div>
          
          <p>Our team will contact you within 24 hours to schedule a consultation and site visit.</p>
          
          ${invoiceData.contactInfo.additionalInfo ? `
            <div class="invoice-details">
              <h4>Additional Information Provided:</h4>
              <p>${invoiceData.contactInfo.additionalInfo}</p>
            </div>
          ` : ''}
        </div>
        
        <div class="footer">
          <p><strong>${invoiceData.companyInfo.name}</strong></p>
          <p>${invoiceData.companyInfo.address}</p>
          <p>Phone: ${invoiceData.companyInfo.phone} | Email: ${invoiceData.companyInfo.email}</p>
        </div>
      </body>
    </html>
  `;
};

export const generateBusinessEmailTemplate = (invoiceData: InvoiceData): string => {
    return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #007bff; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .client-details { background: #f8f9fa; padding: 15px; margin: 20px 0; border-radius: 5px; }
          .breakdown-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .breakdown-table th, .breakdown-table td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
          .breakdown-table th { background: #f8f9fa; }
          .total-row { font-weight: bold; font-size: 1.1em; background: #e9ecef; }
          .action-required { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 20px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="header">
        <img src="https://blinkav.co/images/logo-black.png" alt="Blinkav Logo" /><br><br>
          <h2>New Quote Request - ${invoiceData.invoiceNumber}</h2>
        </div>
        
        <div class="content">
          <div class="action-required">
            <h3>⚡ Action Required</h3>
            <p>A new quote request has been submitted. Please follow up with the customer within 24 hours.</p>
          </div>
          
          <div class="client-details">
            <h3>Customer Information</h3>
            <ul>
              <li><strong>Name:</strong> ${invoiceData.contactInfo.name}</li>
              <li><strong>Phone:</strong> ${invoiceData.contactInfo.phone}</li>
              <li><strong>Email:</strong> ${invoiceData.contactInfo.email}</li>
            </ul>
          </div>
          
          <h3>Project Details</h3>
          <ul>
            <li><strong>Project Type:</strong> ${invoiceData.projectType}</li>
            <li><strong>Property Type:</strong> ${invoiceData.propertyType}</li>
            <li><strong>Building Description:</strong> ${invoiceData.propertySubtype}</li>
            <li><strong>Room Count:</strong> ${invoiceData.roomCount}</li>
            <li><strong>Existing Wiring:</strong> ${invoiceData.hasExistingWiring}</li>
          </ul>
          
          <h3>Estimated Cost Breakdown</h3>
          <table class="breakdown-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${invoiceData.pricing.breakdown.map(item => `
                <tr>
                  <td>${item.label}</td>
                  <td>${formatCurrency(item.price)}</td>
                </tr>
              `).join('')}
              <tr class="total-row">
                <td>Total Estimated Revenue</td>
                <td>${formatCurrency(invoiceData.pricing.total)}</td>
              </tr>
            </tbody>
          </table>
          
          ${invoiceData.contactInfo.additionalInfo ? `
            <div class="client-details">
              <h4>Additional Customer Notes:</h4>
              <p>${invoiceData.contactInfo.additionalInfo}</p>
            </div>
          ` : ''}
          
          <div class="action-required">
            <h4>Next Steps:</h4>
            <ol>
              <li>Contact customer within 24 hours</li>
              <li>Schedule site visit and consultation</li>
              <li>Provide refined quote after inspection</li>
              <li>Update CRM with lead information</li>
            </ol>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const contactUsEmailTemplate = (contactUs: ContactUsData): string => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Message</title>
    <style>
      body {
        font-family: 'Segoe UI', sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .email-wrapper {
        max-width: 640px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 6px 18px rgba(0,0,0,0.1);
      }
      .email-header {
        background: linear-gradient(to right, #0b1f3c, #e98524);
        padding: 20px;
        text-align: center;
        color: #ffffff;
      }
      .email-header img {
        max-height: 60px;
        margin-bottom: 10px;
      }
      .email-header h1 {
        margin: 0;
        font-size: 24px;
        letter-spacing: 1px;
      }
      .email-body {
        padding: 30px;
        color: #333333;
      }
      .email-body h2 {
        font-size: 20px;
        margin-top: 0;
        color: #0b1f3c;
      }
      .info-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      .info-table td {
        padding: 10px 0;
        vertical-align: top;
      }
      .info-table td.label {
        font-weight: bold;
        color: #e98524;
        width: 120px;
      }
      .message-box {
        background-color: #fdf7f2;
        border-left: 4px solid #e98524;
        padding: 15px;
        margin-top: 20px;
        border-radius: 6px;
        font-style: italic;
      }
      .email-footer {
        background-color: #f0f0f0;
        padding: 20px;
        text-align: center;
        font-size: 14px;
        color: #777777;
      }
      .email-footer a {
        color: #e98524;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-header">
        <img src="https://blinkav.co/images/logo-black.png" alt="Blinkav Logo" />
        <h3>New Contact Message</h3>
      </div>
      <div class="email-body">
        <h2>You've received a message from your website:</h2>
        <table class="info-table">
          <tr>
            <td class="label">Name:</td>
            <td>${contactUs.name}</td>
          </tr>
          <tr>
            <td class="label">Email:</td>
            <td>${contactUs.email}</td>
          </tr>
          <tr>
            <td class="label">Phone:</td>
            <td>${contactUs.phone}</td>
          </tr>
          <tr>
            <td class="label">Subject:</td>
            <td>Consultation Scheduler</td>
          </tr>
        </table>
        <div class="message-box">
          Hello Blinkav team,<br />
          ${contactUs.message}
        </div>
      </div>
      <div class="email-footer">
        This message was sent from the <a href="https://blinkav.co/contact/">Contact Us</a> page.<br />
        &copy; 2025 <strong style="color:#0b1f3c;"> Blinkav Ltd. </strong>. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
}