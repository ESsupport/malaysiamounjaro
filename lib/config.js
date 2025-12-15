// WhatsApp Configuration
// Update the phone number below (include country code without + or spaces)
// Example: For Malaysia +60123456789, use: 60123456789

export const WHATSAPP_CONFIG = {
  // Your WhatsApp number (with country code, no + or spaces)
  phoneNumber: "60143892988",

  // Default messages for different sections
  messages: {
    header: "Saya ingin bertanya tentang maklumat lanjut mengenai Mounjaro.\n我想询问更多Mounjaro的资料\nI would like to know more about Mounjaro.",
    product: (productName) => `Saya ingin bertanya tentang ${productName}.\n我想询问${productName}的资料\nI would like to know more about ${productName}.`,
    consultation: "Saya ingin bertanya tentang maklumat lanjut mengenai Mounjaro.\n我想询问更多Mounjaro的资料\nI would like to know more about Mounjaro.",
  },

  // Generate WhatsApp URL
  getWhatsAppUrl: function(message = "") {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${this.phoneNumber}${message ? `?text=${encodedMessage}` : ""}`
  }
}

