import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRipple, setIsRipple] = useState(false);

  const phoneNumber = "923126922823"; // Pakistani number with country code
  const message = "Hello! I visited your portfolio and would like to connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    setIsRipple(true);
    setTimeout(() => setIsRipple(false), 600);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <style>{`
        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes whatsapp-ripple {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes whatsapp-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes tooltip-fade-in {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .whatsapp-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: whatsapp-pulse 2s infinite, whatsapp-float 3s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-btn:hover {
          transform: scale(1.12) translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
          animation: whatsapp-pulse 2s infinite;
        }

        .whatsapp-btn.ripple {
          animation: whatsapp-ripple 0.6s ease-out;
        }

        .whatsapp-btn svg {
          width: 32px;
          height: 32px;
          fill: #ffffff;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));
          transition: transform 0.3s ease;
        }

        .whatsapp-btn:hover svg {
          transform: rotate(-10deg) scale(1.1);
        }

        .whatsapp-tooltip {
          position: fixed;
          bottom: 40px;
          right: 100px;
          background: rgba(18, 18, 18, 0.95);
          backdrop-filter: blur(10px);
          color: #fff;
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
          white-space: nowrap;
          pointer-events: none;
          animation: tooltip-fade-in 0.3s ease forwards;
          border: 1px solid rgba(37, 211, 102, 0.3);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid rgba(18, 18, 18, 0.95);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        @media (max-width: 768px) {
          .whatsapp-btn {
            bottom: 20px;
            right: 20px;
            width: 54px;
            height: 54px;
          }

          .whatsapp-btn svg {
            width: 28px;
            height: 28px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>

      {isHovered && <div className="whatsapp-tooltip">💬 Chat on WhatsApp</div>}

      <button
        className={`whatsapp-btn ${isRipple ? "ripple" : ""}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </>
  );
};

export default WhatsAppButton;
