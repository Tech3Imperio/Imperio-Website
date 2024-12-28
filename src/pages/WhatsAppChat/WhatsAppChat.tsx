import { FloatingWhatsApp } from "react-floating-whatsapp";
import favicon from "../../assets/Images/logo/favicon.ico";

export default function WhatsAppChat() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+918591953385"
        accountName="Imperio Railing"
        messageDelay={2}
        darkMode={true}
        avatar={favicon}
        statusMessage="Online"
        alt="whatsappButton"
        chatMessage="Hello there! How can I assist you?"
        // defaultMessage="Hello How can i help you"
      />
    </div>
  );
}
