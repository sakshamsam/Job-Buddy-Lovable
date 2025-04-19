
import html2pdf from 'html2pdf.js';
import { toast } from "sonner";

export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast("Success", {
        description: "Cover letter copied to clipboard!",
      });
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
      toast("Error", {
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    });
};

export const downloadAsPDF = (elementId: string, filename: string): void => {
  const element = document.getElementById(elementId);
  if (!element) {
    toast("Error", {
      description: "Could not find content to download",
      variant: "destructive",
    });
    return;
  }

  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `${filename}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  toast("Processing", {
    description: "Preparing your PDF for download...",
  });

  html2pdf().set(opt).from(element).save()
    .then(() => {
      toast("Success", {
        description: "Cover letter downloaded successfully!",
      });
    })
    .catch(err => {
      console.error('Failed to generate PDF: ', err);
      toast("Error", {
        description: "Failed to download as PDF",
        variant: "destructive",
      });
    });
};
