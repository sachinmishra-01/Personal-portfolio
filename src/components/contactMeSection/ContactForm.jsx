// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [success, setSuccess] = useState("");
//   const handleName = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm("service_mg6rrdd", "template_6tz4rau", form.current, {
//         publicKey: "bUgOcvyKy9OpnXfsG",
//       })
//       .then(
//         () => {
//           setEmail("");
//           setName("");
//           setMessage("");
//           setSuccess("Message Sent Succesfully");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div>
//       <p className="text-cyan">{success}</p>
//       <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="from_name"
//           placeholder="Your Name"
//           required
//           className="h-12 rounded-lg bg-lightBrown px-2"
//           value={name}
//           onChange={handleName}
//         />
//         <input
//           type="email"
//           name="from_email"
//           placeholder="Your Email"
//           required
//           className="h-12 rounded-lg bg-lightBrown px-2"
//           value={email}
//           onChange={handleEmail}
//         />
//         <textarea
//           type="text"
//           name="message"
//           rows="9"
//           cols="50"
//           placeholder="Message"
//           required
//           className=" rounded-lg bg-lightBrown p-2"
//           value={message}
//           onChange={handleMessage}
//         />
//         <button
//           type="submit"
//           className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const PopupMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      {message}
      <button className="ml-4 text-sm underline" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popupMsg, setPopupMsg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_mg6rrdd", "template_6tz4rau", form.current, {
         publicKey: "bUgOcvyKy9OpnXfsG",
      })

      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setPopupMsg("Message sent successfully!");
          setTimeout(() => setPopupMsg(""), 3000);
        },
        (error) => {
          setPopupMsg("Failed to send message. Please try again.");
          setTimeout(() => setPopupMsg(""), 3000);
        }
      );
  };

  return (
    <div>
      <PopupMessage message={popupMsg} onClose={() => setPopupMsg("")} />
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

