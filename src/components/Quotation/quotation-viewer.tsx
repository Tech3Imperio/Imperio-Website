"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Download, ArrowLeft, FileText } from "lucide-react";

interface QuotationData {
  orderId: string;
  timestamp: string;
  customerDetails: {
    name: string;
    phone: string;
    email: string;
    pincode: string;
    projectName: string;
  };
  productSelection: {
    base: string;
    handrail: string;
    finish: string;
    glassType: string;
    height: number;
    size: number;
  };
  pricing: {
    diy: number;
    standard: number;
    premium: number;
  };
  images: {
    baseImage: string;
    handrailImage: string;
    glassTypeImage: string;
    finalImage: string;
  };
  validTill: string;
}

interface QuotationViewerProps {
  quotationData: QuotationData;
  onBack: () => void;
  onNewQuote: () => void;
}

const QuotationViewer: React.FC<QuotationViewerProps> = ({
  quotationData,
  onBack,
  onNewQuote,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fontSize = isMobile ? "14px" : "16px";
  const cellPadding = isMobile ? "6px 10px" : "10px 15px";

  // CHANGED: Added null checks and fallbacks for all quotationData properties
  const safeQuotationData = {
    orderId: quotationData?.orderId || "Unknown",
    timestamp: quotationData?.timestamp || new Date().toISOString(),
    customerDetails: {
      name: quotationData?.customerDetails?.name || "Unknown",
      phone: quotationData?.customerDetails?.phone || "Unknown",
      email: quotationData?.customerDetails?.email || "Unknown",
      pincode: quotationData?.customerDetails?.pincode || "Unknown",
      projectName: quotationData?.customerDetails?.projectName || "Unknown",
    },
    productSelection: {
      base: quotationData?.productSelection?.base || "Unknown",
      handrail: quotationData?.productSelection?.handrail || "Unknown",
      finish: quotationData?.productSelection?.finish || "Unknown",
      glassType: quotationData?.productSelection?.glassType || "Unknown",
      height: quotationData?.productSelection?.height || 3.5,
      size: quotationData?.productSelection?.size || 0,
    },
    pricing: {
      diy: quotationData?.pricing?.diy || 0,
      standard: quotationData?.pricing?.standard || 0,
      premium: quotationData?.pricing?.premium || 0,
    },
    images: {
      baseImage:
        quotationData?.images?.baseImage ||
        "/placeholder.svg?height=200&width=300",
      handrailImage:
        quotationData?.images?.handrailImage ||
        "/placeholder.svg?height=200&width=300",
      glassTypeImage:
        quotationData?.images?.glassTypeImage ||
        "/placeholder.svg?height=200&width=300",
      finalImage:
        quotationData?.images?.finalImage ||
        "/placeholder.svg?height=400&width=600",
    },
    validTill:
      quotationData?.validTill ||
      new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  };

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);

      // Create a new window with the quotation content for printing
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        alert("Please allow popups to download the quotation");
        return;
      }

      const quotationHTML = generateQuotationHTML();

      printWindow.document.write(quotationHTML);
      printWindow.document.close();

      // Wait for images to load before printing
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 1000);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Error downloading quotation. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const generateQuotationHTML = () => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Imperio Glass Railing Quotation - ${
        safeQuotationData.orderId
      }</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.4; color: #333; }
        .quotation-container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .content-wrapper { background-color: white; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden; }
        
        @media print {
          body { font-size: 12px; }
          .quotation-container { padding: 10px; }
          .page-break { page-break-before: always; }
        }
      </style>
    </head>
    <body>
      <div class="quotation-container">
        <div class="content-wrapper">
          
          <!-- Cover Page -->
          <div style="width: 100%; height: 100%; color: white; text-align: center; position: relative; max-height: 100%; display: flex; flex-direction: column; justify-content: center;align-items: center">
            <div style="flex: 1; display: flex; align-items: center; justify-content: center; margin: 0;">
              <img src="/images/quotation/quotation1.png" alt="Imperio Glass Railing Building" style="height: 90vh; object-fit: cover; border-radius: 10px; border: 3px solid white;" />
            </div>
          </div>

          <!-- Thank You Text -->
          <div style="padding: 40px 0px; height:100vh; text-align: center; align-items: center; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="margin-bottom: 20px;">
              <img src="/images/quotation/logo.png" alt="Logo" style="width: 150px; object-fit: cover; margin-bottom: 10px;" />
            </div>
            <div style="font-size: 14px; line-height: 1.6; max-width: 500px; margin: 0 auto;">
              <p style="margin: 0 0 15px 0;">Thank you for choosing Imperio Glass Railing Systems for your project. We appreciate your trust in our premium glass railings and are committed to delivering excellence in both quality and service.</p>
              <p style="margin: 0 0 15px 0;">Enclosed is your quotation, carefully tailored to meet your requirements.</p>
              <p style="margin: 0 0 15px 0;">We look forward to bringing elegance, safety, and durability to your space with Imperio's superior glass railing solutions.</p>
              <p style="margin: 0; font-weight: bold;">Best regards,<br/>Imperio Railing Systems</p>
            </div>
            <div style="text-align: center; margin-top: 30px; align-items: center; width:100vw;">
              <img src="/images/quotation/quotation2.jpg" alt="thanks" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; border: 2px solid #ddd;" />
            </div>
          </div>

          <!-- WE PROVIDE Section -->
          <div style="padding: 30px 0px; text-align: center; align-items: center; display: flex; flex-direction: column; justify-content: center;">
            <div style="margin-bottom: 20px;">
              <img src="/images/quotation/logo.png" alt="Logo" style="width: 150px; object-fit: cover; margin-bottom: 10px;" />
            </div>
            <h2 style="font-size: 20px; margin: 0 0 30px 0; font-weight: bold; color: #333;">WE PROVIDE</h2>
            <div style="display: flex; flex-direction: column; gap: 30px; margin-bottom: 20px; width: 100%">
              <div style="text-align: center;">
                <img src="/images/quotation/quotation3.png" alt="Balcony Glass Railings" style="width: 100%; height: 220px; object-fit: cover; margin-bottom: 10px;" />
                <p style="margin: 0; font-size: 14px; font-weight: bold;">Balcony Glass Railings</p>
              </div>
              <div style="text-align: center;">
                <img src="/images/quotation/quotation4.png" alt="Staircase Glass Railings" style="width: 100%; height: 220px; object-fit: cover; margin-bottom: 10px;" />
                <p style="margin: 0; font-size: 14px; font-weight: bold;">Staircase Glass Railings</p>
              </div>
              <div style="text-align: center;">
                <img src="/images/quotation/quotation5.jpg" alt="Terrace Glass Railings" style="width: 100%; height: 220px; object-fit: cover; margin-bottom: 10px;" />
                <p style="margin: 0; font-size: 14px; font-weight: bold;">Terrace Glass Railings</p>
              </div>
            </div>
          </div>

          <!-- YOUR SELECTION Section -->
          <div style="padding: 20px 15px; background-color: white;">
            <div style="margin-bottom: 20px; width: 100%; text-align: center; align-items: center; display: flex; flex-direction: column; justify-content: center;">
              <img src="/images/quotation/logo.png" alt="Logo" style="width: 150px; object-fit: cover; margin-bottom: 10px;" />
            </div>
            <h2 style="font-size:16px; margin: 0 0 10px 0; font-weight: bold; color: #333; text-align: center;">YOUR SELECTION</h2>
            
            <div style="background-color: #333 !important; color: white !important; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; font-size: 14px;">
                <div><strong>Order Id:</strong> ${
                  safeQuotationData.orderId
                }</div>
                <div><strong>Date:</strong> ${new Date(
                  safeQuotationData.timestamp
                ).toLocaleDateString()}</div>
                <div><strong>Valid Till:</strong> ${
                  safeQuotationData.validTill
                }</div>
                <div><strong>Name:</strong> ${
                  safeQuotationData.customerDetails.name
                }</div>
                <div><strong>Pincode:</strong> ${
                  safeQuotationData.customerDetails.pincode
                }</div>
                <div><strong>Project Name:</strong> ${
                  safeQuotationData.customerDetails.projectName
                }</div>
              </div>
            </div>

            <!-- Product Images -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 10px;">
              <div style="text-align: center;">
                <div style="border: 2px solid #ddd; border-radius: 8px; padding: 10px; background-color: #f9f9f9;">
                  <img src="${
                    safeQuotationData.images.baseImage
                  }" alt="Base" style="width: 180px; height: 180px; object-fit: cover; margin-bottom: 10px;" />
                  <p style="margin: 0; font-size: 12px; font-weight: bold;">BASE</p>
                  <p style="margin: 0; font-size: 12px;">${
                    safeQuotationData.productSelection.base
                  }</p>
                </div>
              </div>
              <div style="text-align: center;">
                <div style="border: 2px solid #ddd; border-radius: 8px; padding: 15px; background-color: #f9f9f9;">
                  <img src="${
                    safeQuotationData.images.glassTypeImage
                  }" alt="Glass Type" style="width: 180px; height: 180px; object-fit: cover; margin-bottom: 10px;" />
                  <p style="margin: 0; font-size: 12px; font-weight: bold;">GLASS TYPE</p>
                  <p style="margin: 0; font-size: 12px;">${
                    safeQuotationData.productSelection.glassType
                  }</p>
                </div>
              </div>
              <div style="text-align: center;">
                <div style="border: 2px solid #ddd; border-radius: 8px; padding: 15px; background-color: #f9f9f9;">
                  <img src="${
                    safeQuotationData.images.handrailImage
                  }" alt="Handrail" style="width: 180px; height: 180px; object-fit: cover; margin-bottom: 10px;" />
                  <p style="margin: 0; font-size: 12px; font-weight: bold;">HANDRAIL</p>
                  <p style="margin: 0; font-size: 12px;">${
                    safeQuotationData.productSelection.handrail
                  }</p>
                </div>
              </div>
            </div>

            <!-- Final Product Image -->
            <div style="text-align: center; margin-top: 30px; align-items: center;">
              <img src="${
                safeQuotationData.images.finalImage
              }" alt="Final Product" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; border: 2px solid #ddd;" />
              <p style="margin: 10px 0 0 0; font-size: 12px; font-style: italic;">*Finish may vary as per your selection. This is only for Elevation detail.</p>
            </div>
          </div>

          <!-- CHOOSE YOUR PLAN Section -->
          <div style="padding: 20px 10px; background-color: #f8f9fa; text-align: center; align-items: center; display: flex; flex-direction: column; justify-content: center;">
            <div style="margin-bottom: 10px; width: 100%; text-align: center; align-items: center; display: flex; flex-direction: column; justify-content: center;">
              <img src="/images/quotation/logo.png" alt="Logo" style="width: 150px; object-fit: cover; margin-bottom: 10px;" />
            </div>
            <h2 style="font-size: 20px; margin: 0 0 10px 0; font-weight: bold; color: #333; text-align: center;">CHOOSE YOUR PLAN</h2>
            
            <!-- Pricing Table -->
            <div style="background-color: white; border-radius: 8px; overflow: hidden; margin-bottom: 10px;">
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #333; color: white;">
                    <th style="padding: 15px; text-align: left; font-size: 14px;">Order Id: ${
                      safeQuotationData.orderId
                    }</th>
                    <th style="padding: 15px; text-align: center; font-size: 14px;">DIY</th>
                    <th style="padding: 15px; text-align: center; font-size: 14px;">Standard</th>
                    <th style="padding: 15px; text-align: center; font-size: 14px;">Premium</th>
                  </tr>
                  <tr style="background-color: #4a90e2; color: white;">
                    <th style="padding: 10px 15px; text-align: left; font-size: 12px;"></th>
                    <th style="padding: 10px 15px; text-align: center; font-size: 16px; font-weight: bold;">₹ ${
                      safeQuotationData.pricing.diy
                    } /RFT</th>
                    <th style="padding: 10px 15px; text-align: center; font-size: 16px; font-weight: bold;">₹ ${
                      safeQuotationData.pricing.standard
                    } /RFT</th>
                    <th style="padding: 10px 15px; text-align: center; font-size: 16px; font-weight: bold;">₹ ${
                      safeQuotationData.pricing.premium
                    } /RFT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Instant Quote</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Robust Packaging</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Transport Co-ordination</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Delivery Tracking Number</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Sales Support</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Measurement Verification</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Glass Included</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">One Visit Installation</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Doorstep Delivery</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Installation Verification</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Site Consultation</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Onsite Measurement</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Unloading & Lifting</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Reschedule Installation</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">3D Drawings</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Cleaning</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">ADD ON</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Insurance</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">ADD ON</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">✓</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Nano coating on Glass</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">ADD ON</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">ADD ON</span></td></tr>
                  <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 15px; font-size: 12px; font-weight: 500;">Express Delivery</td><td style="padding: 8px 15px; text-align: center;"><span style="color: #dc3545; font-size: 16px;">✗</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">ADD ON</span></td><td style="padding: 8px 15px; text-align: center;"><span style="color: #28a745; font-size: 16px;">ADD ON</span></td></tr>
                </tbody>
              </table>
            </div>
            
            <!-- Contact Button -->
            <div style="text-align: center; margin-bottom: 10px;">
              <button style="background-color: #28a745; color: white; border: none; border-radius: 25px; font-size: 16px; font-weight: bold; text-transform: uppercase; cursor: pointer"  onclick="window.location.href='/contactus';">CONTACT US NOW!!</button>
            </div>
          </div>

          <!-- FOLLOW US Section -->
          <div style="padding: 10px 10px; background-color: white; text-align: center; align-items: center; display: flex; flex-direction: column; justify-content: center;">
            <div style="margin-bottom: 20px; width: 100%; text-align: center; align-items: center; display: flex; flex-direction: column; justify-content: center;">
              <img src="/images/quotation/logo.png" alt="Logo" style="width: 150px; object-fit: cover; margin-bottom: 10px;" />
            </div>
            <h2 style="font-size: 20px; margin: 0 0 30px 0; font-weight: bold; color: #333;">FOLLOW US</h2>

            <!-- Social Media Images -->
            <div style="width: 100%; height: 60%; color: white; text-align: center; position: relative; max-height: 60%; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="flex: 1; display: flex; align-items: center; justify-content: center; margin: 0;">
                <img src="/images/quotation/quotation6.png" alt="social media" style="height: 60vh; object-fit: cover; border-radius: 10px; border: 3px solid white;" />
              </div>
            </div>

            <!-- Contact Information -->
            <div style="background-color: #333; color: white; padding: 20px; border-radius: 8px; font-size: 12px;">
              <div style="margin-bottom: 15px;">
                <h1 style="font-size: 18px; margin: 0 0 10px 0; font-weight: 300; letter-spacing: 1px;">imperio</h1>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left;">
                <div><strong>CONTACT US</strong><br/>sales@imperiorailing.com<br/>02266362506<br/>8591953382</div>
                <div><strong>Our Address</strong><br/>1, Aman Chambers, New Queens Rd, Charni Road, Mumbai, Maharashtra - 400004.</div>
                <div><strong>FOLLOW US</strong><br/>@imperio.railings<br/>www.imperiorailing.com</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </body>
    </html>
  `;
  };

  // CHANGED: Early return if quotationData is null or undefined
  if (!quotationData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Error Loading Quotation</h1>
          <p>Unable to load quotation data. Please try again.</p>
          <button
            onClick={onBack}
            style={{
              padding: "12px 24px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          top: 0,
          zIndex: 100,
        }}
      >
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h1 style={{ margin: 0, fontSize: "24px", color: "#007bff" }}>
          Quotation - {safeQuotationData.orderId}
        </h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: isDownloading ? "not-allowed" : "pointer",
              fontSize: "14px",
              opacity: isDownloading ? 0.7 : 1,
            }}
          >
            {isDownloading ? (
              <>
                <FileText size={16} />
                Downloading...
              </>
            ) : (
              <>
                <Download size={16} />
                Download PDF
              </>
            )}
          </button>

          <button
            onClick={onNewQuote}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ffc107",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            New Quote
          </button>
        </div>
      </div>

      {/* Quotation Content - PDF Style */}
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Cover Page */}
          <div
            style={{
              width: "100%",
              height: "100%",
              color: "white",
              // padding: "40px 30px",
              textAlign: "center",
              position: "relative",
              maxHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Building Image */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0",
              }}
            >
              <img
                src="/images/quotation/quotation1.png"
                alt="Imperio Glass Railing Building"
                style={{
                  height: "100vh",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "3px solid white",
                }}
              />
            </div>
          </div>

          {/* Thank You Text */}
          <div
            style={{
              padding: "40px 0px",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // backgroundColor: "#f8f9fa",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <img
                src="/images/quotation/logo.png"
                alt="Balcony Glass Railings"
                style={{
                  width: "150px",
                  objectFit: "cover",
                  // borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <p style={{ margin: "0 0 15px 0" }}>
                Thank you for choosing Imperio Glass Railing Systems for your
                project. We appreciate your trust in our premium glass railings
                and are committed to delivering excellence in both quality and
                service.
              </p>
              <p style={{ margin: "0 0 15px 0" }}>
                Enclosed is your quotation, carefully tailored to meet your
                requirements.
              </p>
              <p style={{ margin: "0 0 15px 0" }}>
                We look forward to bringing elegance, safety, and durability to
                your space with Imperio's superior glass railing solutions.
              </p>
              <p style={{ margin: "0", fontWeight: "bold" }}>
                Best regards,
                <br />
                Imperio Railing Systems
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                marginTop: "100px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src="/images/quotation/quotation2.jpg"
                alt="thanks"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "2px solid #ddd",
                }}
              />
            </div>
          </div>

          {/* WE PROVIDE Section */}
          <div
            style={{
              padding: "40px 0px",
              textAlign: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // backgroundColor: "#f8f9fa",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <img
                src="/images/quotation/logo.png"
                alt="Balcony Glass Railings"
                style={{
                  width: "150px",
                  objectFit: "cover",
                  // borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "20px",
                margin: "0 0 30px 0",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              WE PROVIDE
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                marginBottom: "30px",
              }}
            >
              <div style={{ textAlign: "center", width: "100%" }}>
                <img
                  src="/images/quotation/quotation3.png"
                  alt="Balcony Glass Railings"
                  style={{
                    width: "100%",
                    // height: "250px",
                    objectFit: "cover",
                    // borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <p
                  style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}
                >
                  Balcony Glass Railings
                </p>
              </div>
              <div style={{ textAlign: "center", width: "100%" }}>
                <img
                  src="/images/quotation/quotation4.png"
                  alt="Staircase Glass Railings"
                  style={{
                    width: "100%",
                    // height: "250px",
                    objectFit: "cover",
                    // borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <p
                  style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}
                >
                  Staircase Glass Railings
                </p>
              </div>
              <div style={{ textAlign: "center", width: "100%" }}>
                <img
                  src="/images/quotation/quotation5.jpg"
                  alt="Terrace Glass Railings"
                  style={{
                    width: "100%",
                    // height: "250px",
                    objectFit: "cover",
                    // borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <p
                  style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}
                >
                  Terrace Glass Railings
                </p>
              </div>
            </div>
          </div>

          {/* YOUR SELECTION Section */}
          <div style={{ padding: "40px 30px", backgroundColor: "white" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
                width: "100%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <img
                  src="/images/quotation/logo.png"
                  alt="Logo"
                  style={{
                    width: "150px",
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
              </div>
            </div>
            <h2
              style={{
                fontSize: "20px",
                margin: "0 0 30px 0",
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
              }}
            >
              YOUR SELECTION
            </h2>

            {/* Customer Details in Black Box */}
            <div
              style={{
                backgroundColor: "#333",
                color: "white",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    window.innerWidth <= 768 ? "1fr" : "repeat(3, 1fr)",
                  gap: "15px",
                  fontSize: "14px",
                }}
              >
                <div>
                  <strong>Order Id:</strong> {safeQuotationData.orderId}
                </div>
                <div>
                  <strong>Date:</strong>{" "}
                  {new Date(safeQuotationData.timestamp).toLocaleDateString()}
                </div>
                <div>
                  <strong>Valid Till:</strong> {safeQuotationData.validTill}
                </div>
                <div>
                  <strong>Name:</strong>{" "}
                  {safeQuotationData.customerDetails.name}
                </div>
                <div>
                  <strong>Pincode:</strong>{" "}
                  {safeQuotationData.customerDetails.pincode}
                </div>
                <div>
                  <strong>Project Name:</strong>{" "}
                  {safeQuotationData.customerDetails.projectName}
                </div>
              </div>
            </div>

            {/* Product Images */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth <= 800 ? "1fr" : "repeat(3, 1fr)",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    padding: "15px",
                    backgroundColor: "#f9f9f9",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={
                      safeQuotationData.images.baseImage || "/placeholder.svg"
                    }
                    alt="Base"
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      height: window.innerWidth <= 768 ? "150px" : "200px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <p
                    style={{
                      margin: "0",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    BASE
                  </p>
                  <p style={{ margin: "0", fontSize: "12px" }}>
                    {safeQuotationData.productSelection.base}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    padding: "15px",
                    backgroundColor: "#f9f9f9",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={
                      safeQuotationData.images.glassTypeImage ||
                      "/placeholder.svg"
                    }
                    alt="Glass Type"
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      height: window.innerWidth <= 768 ? "150px" : "200px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <p
                    style={{
                      margin: "0",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    GLASS TYPE
                  </p>
                  <p style={{ margin: "0", fontSize: "12px" }}>
                    {safeQuotationData.productSelection.glassType}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    padding: "15px",
                    backgroundColor: "#f9f9f9",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={
                      safeQuotationData.images.handrailImage ||
                      "/placeholder.svg"
                    }
                    alt="Handrail"
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      height: window.innerWidth <= 768 ? "150px" : "200px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                  <p
                    style={{
                      margin: "0",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    HANDRAIL
                  </p>
                  <p style={{ margin: "0", fontSize: "12px" }}>
                    {safeQuotationData.productSelection.handrail}
                  </p>
                </div>
              </div>
            </div>

            {/* Final Product Image */}
            <div
              style={{
                textAlign: "center",
                marginTop: "30px",
                alignItems: "center",
              }}
            >
              <img
                src={safeQuotationData.images.finalImage || "/placeholder.svg"}
                alt="Final Product"
                style={{
                  width: "100%",
                  height: window.innerWidth <= 800 ? "200px" : "500px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "2px solid #ddd",
                }}
              />
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "12px",
                  fontStyle: "italic",
                }}
              >
                *Finish may vary as per your selection. This is only for
                Elevation detail.
              </p>
            </div>
          </div>

          {/* CHOOSE YOUR PLAN Section */}
          <div style={{ padding: "40px 20px" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/quotation/logo.png"
                alt="Balcony Glass Railings"
                style={{
                  width: "150px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
            </div>

            <h2
              style={{
                fontSize: "20px",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              CHOOSE YOUR PLAN
            </h2>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflowX: "auto",
                maxWidth: "100%",
              }}
            >
              <table
                style={{
                  width: "100%",
                  minWidth: isMobile ? "800px" : "auto",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#333", color: "white" }}>
                    <th
                      style={{
                        padding: cellPadding,
                        textAlign: "left",
                        fontSize,
                      }}
                    >{`Order Id: ${safeQuotationData.orderId}`}</th>
                    <th
                      style={{
                        padding: cellPadding,
                        textAlign: "center",
                        fontSize,
                      }}
                    >
                      DIY
                    </th>
                    <th
                      style={{
                        padding: cellPadding,
                        textAlign: "center",
                        fontSize,
                      }}
                    >
                      Standard
                    </th>
                    <th
                      style={{
                        padding: cellPadding,
                        textAlign: "center",
                        fontSize,
                      }}
                    >
                      Premium
                    </th>
                  </tr>
                  <tr style={{ backgroundColor: "#4a90e2", color: "white" }}>
                    <th style={{ padding: cellPadding }}></th>
                    <th
                      style={{
                        padding: cellPadding,
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize,
                      }}
                    >
                      ₹ {safeQuotationData.pricing.diy} /RFT
                    </th>
                    <th
                      style={{
                        padding: cellPadding,
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize,
                      }}
                    >
                      ₹ {safeQuotationData.pricing.standard} /RFT
                    </th>
                    <th
                      style={{
                        padding: cellPadding,
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize,
                      }}
                    >
                      ₹ {safeQuotationData.pricing.premium} /RFT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Instant Quote",
                      diy: "✓",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Robust Packaging",
                      diy: "✓",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Transport Co-ordination",
                      diy: "✓",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Delivery Tracking Number",
                      diy: "✓",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Sales Support",
                      diy: "✓",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Measurement Verification",
                      diy: "✗",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Glass Included",
                      diy: "✗",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "One Visit Installation",
                      diy: "✗",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Doorstep Delivery",
                      diy: "✗",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Installation Verification",
                      diy: "✗",
                      standard: "✓",
                      premium: "✓",
                    },
                    {
                      feature: "Site Consultation",
                      diy: "✗",
                      standard: "✗",
                      premium: "✓",
                    },
                    {
                      feature: "Onsite Measurement",
                      diy: "✗",
                      standard: "✗",
                      premium: "✓",
                    },
                    {
                      feature: "Unloading & Lifting",
                      diy: "✗",
                      standard: "✗",
                      premium: "✓",
                    },
                    {
                      feature: "Reschedule Installation",
                      diy: "✗",
                      standard: "✗",
                      premium: "✓",
                    },
                    {
                      feature: "3D Drawings",
                      diy: "✗",
                      standard: "✗",
                      premium: "✓",
                    },
                    {
                      feature: "Cleaning",
                      diy: "✗",
                      standard: "✗",
                      premium: "ADD ON",
                    },
                    {
                      feature: "Insurance",
                      diy: "✗",
                      standard: "ADD ON",
                      premium: "✓",
                    },
                    {
                      feature: "Nano coating on Glass",
                      diy: "✗",
                      standard: "ADD ON",
                      premium: "ADD ON",
                    },
                    {
                      feature: "Express Delivery",
                      diy: "✗",
                      standard: "ADD ON",
                      premium: "ADD ON",
                    },
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                      <td
                        style={{
                          padding:
                            window.innerWidth <= 800 ? "6px 10px" : "8px 15px",
                          fontSize: window.innerWidth <= 800 ? "11px" : "12px",
                          fontWeight: "500",
                        }}
                      >
                        {row.feature}
                      </td>
                      {[row.diy, row.standard, row.premium].map((value, i) => (
                        <td
                          key={i}
                          style={{
                            padding:
                              window.innerWidth <= 800
                                ? "6px 10px"
                                : "8px 15px",
                            textAlign: "center",
                            fontSize:
                              window.innerWidth <= 800 ? "14px" : "16px",
                            color:
                              value === "✓"
                                ? "#28a745"
                                : value === "✗"
                                ? "#dc3545"
                                : "#333",
                            fontWeight:
                              value !== "✓" && value !== "✗"
                                ? "normal"
                                : undefined,
                          }}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  padding: isMobile ? "12px 30px" : "15px 40px",
                  borderRadius: "25px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
                onClick={() => (window.location.href = "/contactus")}
              >
                CONTACT US NOW!!
              </button>
            </div>
          </div>

          {/* FOLLOW US Section */}
          <div
            style={{
              padding: "40px 30px",
              backgroundColor: "white",
              textAlign: "center",
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <img
                src="/images/quotation/logo.png"
                alt="Balcony Glass Railings"
                style={{
                  width: "150px",
                  objectFit: "cover",
                  // borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "20px",
                margin: "0 0 30px 0",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              FOLLOW US
            </h2>

            {/* Social Media Images */}
            <div
              style={{
                width: "100%",
                height: "100%",
                color: "white",
                // padding: "40px 30px",
                textAlign: "center",
                position: "relative",
                maxHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0",
                }}
              >
                <img
                  src="/images/quotation/quotation6.png"
                  alt="social media"
                  style={{
                    height: "80vh",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "3px solid white",
                  }}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div
              style={{
                backgroundColor: "#333",
                color: "white",
                padding: "20px",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                <h1
                  style={{
                    fontSize: "18px",
                    margin: "0 0 10px 0",
                    fontWeight: "300",
                    letterSpacing: "1px",
                  }}
                >
                  imperio
                </h1>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                <div>
                  <strong>CONTACT US</strong>
                  <br />
                  sales@imperiorailing.com
                  <br />
                  02266362506
                  <br />
                  8591953382
                </div>
                <div>
                  <strong>Our Address</strong>
                  <br />
                  1, Aman Chambers, New Queens Rd, Charni Road, Mumbai,
                  Maharashtra - 400004.
                </div>
                <div>
                  <strong>FOLLOW US</strong>
                  <br />
                  @imperio.railings
                  <br />
                  www.imperiorailing.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationViewer;
