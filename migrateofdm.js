// Get the URL of the current page
const url = window.location.href;

// Extract the last parameter value
const paymentParam = url.substring(url.lastIndexOf("/") + 1);

console.log(paymentParam);

if (paymentParam == "payment") {
  // Get all div elements that contain an input and a span with text "Credit or Debit Card"
  const targetDivs = Array.from(document.querySelectorAll("div")).filter(
    (div) => {
      const hasInput = div.querySelector("input");
      const hasSpanWithText =
        div.querySelector("span")?.textContent === "Credit or Debit Card";
      return hasInput && hasSpanWithText;
    }
  );

  // Function to move an element to the first position within its parent
  const moveToFirstPosition = (element) => {
    const parent = element.parentElement;
    parent.insertBefore(element, parent.firstChild);
  };

  // Move each target div to the first position within its parent
  targetDivs.forEach(moveToFirstPosition);

  const textToSearchCreditOrDebitCard = "Credit Card or Debit Card";

  const matchesCreditOrDebitCard = [];
  for (const span of document.querySelectorAll("span")) {
    if (span.textContent.includes(textToSearchCreditOrDebitCard)) {
      matchesCreditOrDebitCard.push(span);
    }
  }

  // Check if there's at least one matching element
  if (matchesCreditOrDebitCard.length > 0) {
    const spanElement = matchesCreditOrDebitCard[0];

    // Add CSS to float the image to the right and make it smaller
    const imageElement = document.createElement("img");
    imageElement.src =
      "https://cdn.shopify.com/s/files/1/0055/1957/3103/files/Card_Symbols.png?v=1689971265";
    imageElement.alt = "Card Symbols"; // Add alt text for accessibility
    imageElement.style.cssFloat = "right";
    imageElement.style.width = "150px"; // Set the width of the image to make it smaller
    imageElement.style.marginLeft = "175px";
    imageElement.style.position = "absolute";
    imageElement.style.marginTop = "-5px";

    // Create a <span> element for "and more"
    const textSpanElement = document.createElement("span");
    textSpanElement.textContent = "and more...";
    textSpanElement.style.display = "inline"; // Set the display of the span element to inline
    textSpanElement.style.float = "right";
    textSpanElement.style.position = "absolute";
    textSpanElement.style.right = "8px";

    // Append the image and <span> element to the span element
    spanElement.appendChild(imageElement);
    spanElement.appendChild(textSpanElement);
  }

  const textToSearchAfterClicking = "After clicking";

  const matchesAfterClicking = [];
  for (const p of document.querySelectorAll("p")) {
    if (p.textContent.includes(textToSearchAfterClicking)) {
      matchesAfterClicking.push(p);
    }
  }

  // Check if there's at least one matching element
  if (matchesAfterClicking.length > 0) {
    const spanElement = matchesAfterClicking[0].parentNode;

    matchesAfterClicking[0].style.width = "70%";
    matchesAfterClicking[0].style.textAlign = "center";
    matchesAfterClicking[0].style.marginTop = "-15px";

    // Add CSS to float the image to the right and make it smaller
    const imageElement = document.createElement("img");
    imageElement.src =
    "https://cdn.shopify.com/s/files/1/0055/1957/3103/files/Card_Symbols.png?v=1689971265";
    imageElement.alt = "Redirect Img"; // Add alt text for accessibility
    // imageElement.style.cssFloat = "center";
    imageElement.style.width = "30%"; // Set the width of the image to make it smaller

    const divElement = document.createElement("div");
    divElement.prepend(imageElement);
    // divElement.appendChild(spanElement)

    // Create a <span> element for "and more"
    // const textSpanElement = document.createElement("span");
    // textSpanElement.textContent = "and more";
    // textSpanElement.style.display = "inline"; // Set the display of the span element to inline

    // Append the image and <span> element to the span element
    spanElement.prepend(imageElement);
    // spanElement.appendChild(textSpanElement);
  }

  //   Event Listner
  var creditDebitCardRadio = document.getElementById(
    "basic-customManualPayment-77699514553"
  );

  creditDebitCardRadio.addEventListener("change", () => {
    const textToSearch = "After clicking";

    const matches = [];
    for (const p of document.querySelectorAll("p")) {
      if (p.textContent.includes(textToSearch)) {
        matches.push(p);
      }
    }

    // Check if there's at least one matching element
    if (matches.length > 0) {
      const spanElement = matches[0].parentNode;

      matches[0].style.width = "70%";
      matches[0].style.textAlign = "center";
      matches[0].style.marginTop = "-15px";

      // Add CSS to float the image to the right and make it smaller
      const imageElement = document.createElement("img");
      imageElement.src =
      "https://cdn.shopify.com/s/files/1/0055/1957/3103/files/Card_Symbols.png?v=1689971265";
      imageElement.alt = "Redirect Img"; // Add alt text for accessibility
      // imageElement.style.cssFloat = "center";
      imageElement.style.width = "30%"; // Set the width of the image to make it smaller

      const divElement = document.createElement("div");
      divElement.prepend(imageElement);
      // divElement.appendChild(spanElement)

      // Create a <span> element for "and more"
      // const textSpanElement = document.createElement("span");
      // textSpanElement.textContent = "and more";
      // textSpanElement.style.display = "inline"; // Set the display of the span element to inline

      // Append the image and <span> element to the span element
      spanElement.prepend(imageElement);
      // spanElement.appendChild(textSpanElement);
    }
  });
}