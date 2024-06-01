import React from 'react';
import wishgeeks_logo from './img/wishgeeks_logo.png';

const issuesQA = {
  connect_printer: [
    {
      question: "Connection Failure or Troubleshoot Issue",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
  ],
  printer_offline: [
    {
      question: "Connection Failure or Troubleshoot Issue",
      answer: {
        mainText: "If your printer can't communicate with your computer, a Hard Reset is necessary to restore the connection.",
        steps: ["First, turn off the printer and disconnect all cables.", "Next, reconnect all cables and press the On/Off button for 5 seconds.", "Once the printer restarts, link it to your computer and begin printing."],
        additionalText: "If the On/Off button blinks or shows a red/orange light, further troubleshooting is required."
      }
    },
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
      }
    },
    {
      question: "Wireless Connection Issue",
      answer: {
        mainText: "When setting up a wireless printer, ensure that both your printer and computer/laptop are connected to the same Wi-Fi network. Begin by connecting your computer or laptop to your home Wi-Fi.",
        steps: ["First, check that the white/blue light on your printer is on. If it's not, restart the printer and ensure the light turns on.", "Ensure your printer is within 5 meters of your router.", "On your printer, press the Wi-Fi button and confirm that the blue Wi-Fi light is on.", "If the light is blinking, restart the printer and repeat the steps above."],
        additionalText: "If the Wi-Fi light continues to blink or shows red/orange, it means your computer is unable to communicate with the printer."
      }
    }

  ],
  troubleshoot_printer: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
    {
      question: "How do I update my printer drivers?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
  ],
  printer_wont_print: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
    {
      question: "How do I update my printer drivers?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
  ],
  paper_jam_in_printer: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
    {
      question: "How do I update my printer drivers?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
  ],
  setting_up_new_printer: [
    {
      question: "What are common troubleshooting steps for printer issues?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
    },
    {
      question: "How do I update my printer drivers?",
      answer: {
        mainText: "",
        steps: [],
        additionalText: ""
      }
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
                    <p>{item.answer.mainText}</p>
                    <ul>
                      {item.answer.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                    <p>{item.answer.additionalText}</p>
                    <button className='btn btn-primary fw-bold'>Start Chat</button>
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
