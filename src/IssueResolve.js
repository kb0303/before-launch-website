import React from 'react';
import wishgeeks_logo from './img/wishgeeks_logo.png';

const issuesQA = {
  connect_printer: [
    {
      question: "How do I connect my printer to WiFi?",
      answer: "To connect your printer to WiFi, go to the printer's settings menu, select WiFi setup, and follow the instructions to connect to your wireless network."
    },
    {
      question: "What should I do if my printer cannot find the WiFi network?",
      answer: "Ensure your WiFi network is operational, and the printer is within range. You may also need to enter the network details manually if the SSID is hidden."
    },
  ],
  printer_offline: [
    {
      question: "Why is my printer showing as offline?",
      answer: "Your printer might show as offline if there is a connectivity issue, if it’s turned off, or if there is a problem with the printer drivers."
    },
    {
      question: "How do I bring my printer back online?",
      answer: "Try restarting the printer and computer. Ensure the printer is connected to the same network as your computer. You may also need to set the printer to 'online' mode in the printer settings."
    },
  ],
  troubleshoot_printer: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: "Common steps include checking the power and connections, ensuring there is paper and ink, running the printer's self-diagnostic tools, and updating drivers."
    },
    {
      question: "How do I update my printer drivers?",
      answer: "You can update printer drivers from the manufacturer's website or through your operating system's device manager."
    },
  ],
  printer_wont_print: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: "Common steps include checking the power and connections, ensuring there is paper and ink, running the printer's self-diagnostic tools, and updating drivers."
    },
    {
      question: "How do I update my printer drivers?",
      answer: "You can update printer drivers from the manufacturer's website or through your operating system's device manager."
    },
  ],
  paper_jam_in_printer: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: "Common steps include checking the power and connections, ensuring there is paper and ink, running the printer's self-diagnostic tools, and updating drivers."
    },
    {
      question: "How do I update my printer drivers?",
      answer: "You can update printer drivers from the manufacturer's website or through your operating system's device manager."
    },
  ],
  setting_up_new_printer: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: "Common steps include checking the power and connections, ensuring there is paper and ink, running the printer's self-diagnostic tools, and updating drivers."
    },
    {
      question: "How do I update my printer drivers?",
      answer: "You can update printer drivers from the manufacturer's website or through your operating system's device manager."
    },
  ],
};

function IssueResolve({ issue }) {
  const issueContent = issuesQA[issue] || [];

  return (
    <div>
      <nav>
        <img src={wishgeeks_logo} alt="Logo" />
        <p id="company-name">Wish Geeks</p>
      </nav>
      <div className="issue-resolve-container mt-4">
        <div className='issue-faq-container'>
          <h3 className='issue-name'>Issue: <span>{issue.replace(/_/g, ' ')}</span></h3>
          <h4 className='mt-2'>Here are the reasons, Why?</h4>
          <div className="accordion mt-5" id="accordionExample">
            {issueContent.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='chatbot-outer-container'></div>
      </div>
    </div>

  );
}

export default IssueResolve;
