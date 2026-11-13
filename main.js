// main js file

// // js/main.js
// this part is for the contact us page

const INQUIRY_ADDRESS = "hello@baro.com.ph";
const contactForm = document.querySelector("#contact-form");

// the Mailto part 
function buildContactMailto(subject, body) {
  return (
    "mailto:" + INQUIRY_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

// this block will only run if its in the contact page else it proceeds further down
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = contactForm.querySelector("#contact-name").value.trim();
    const email = contactForm.querySelector("#contact-email").value.trim();
    const topicSelect = contactForm.querySelector("#contact-topic");
    const text = contactForm.querySelector("#contact-message").value.trim();
    const topic = topicSelect.value === "" ? "" : topicSelect.options[topicSelect.selectedIndex].text;

    // it check each field of input and alerts the user if somethings missing, it also checks if the email is valid
    if (name === "" || email === "" || topic === "" || text === "") {
      alert("Please fill in your full name, email, topic, and message.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    // The layout for our email
    const subject = "Website message: " + topic;
    const body =
      "Name: " + name + "\r\n" +
      "Email: " + email + "\r\n\r\n" +
      text;

    // The thank you pop up order
    alert("Thank you for your submission, " + name + "! Your email app will open so you can send your message.");
    window.location.href = buildContactMailto(subject, body);
    contactForm.reset();
  });
}

// i've only done the js file for the contact us page