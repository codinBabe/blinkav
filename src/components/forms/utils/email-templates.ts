import { InvoiceData } from "../types/project-wizard-interface";
import { formatCurrency } from "./invoice-generator";

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