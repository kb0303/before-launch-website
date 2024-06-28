import React, { useEffect } from 'react';
// import wishgeeks_logo from './img/wishgeeks_logo.png';
import companyLogo from './img/printerammc.jpg';

const issuesQA = {
  connect_printer: [
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
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
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
      }
    }
  ],
  printer_offline: [
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
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
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
      }
    }

  ],
  troubleshoot_printer: [
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
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
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
      }
    }
  ],
  printer_wont_print: [
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
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
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
      }
    }
  ],
  paper_jam_in_printer: [
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
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
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
      }
    }
  ],
  setting_up_new_printer: [
    {
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
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
      question: "Operating System or Driver Issue",
      answer: {
        mainText: "After updating your operating system, your printer might appear offline if the drivers need updating. This can also occur with a new printer. Here's what to do:",
        steps: ["Go to System Settings and check for any pending updates.", "Visit the official website of the printer manufacturer and download the latest setup file.", "Once the setup file is downloaded, open Device Manager and update the printer driver. Look for a file with a name similar to your printer brand.", "Remove or update any pending drivers and run the downloaded setup file."],
        additionalText: "If you can't update the drivers yourself or identify the necessary drivers, seek further assistance."
      }
    }
  ],
};

function IssueResolve({ issue }) {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script');
      script.src = "https://cdn.pulse.is/livechat/loader.js";
      script.setAttribute('data-live-chat-id', '665c9b5a5fbc0d205b0094dd');
      script.async = true;

      script.onload = () => {
        // Script loaded successfully
        console.log("Script loaded successfully");
      };

      script.onerror = (error) => {
        // Error loading script
        console.error("Error loading script:", error);
      };

      document.body.appendChild(script);
    };

    // Add a slight delay before adding the script
    const timer = setTimeout(addScript, 100);

    // Cleanup function to remove the script when component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const issueContent = issuesQA[issue] || [];

  return (
    <div id="issue-resolve-container">
      <nav>
        <img src={companyLogo} alt="Logo" />
        <p id="company-name">Print Gigs Amc<span className='d-block'>Instant Printer Solution</span></p>
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
                    <a href="tel:+18888506515">
                      <button className='btn btn-primary fw-bold'>Call Us Now</button>
                    </a>
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
