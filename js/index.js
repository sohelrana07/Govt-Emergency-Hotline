// Get Id function
function getId(id) {
  const Element = document.getElementById(id);
  return Element;
}

// Heart Counts Functionalities area here
const heartIcon = document.getElementsByClassName("heart-icon");
for (const heart of heartIcon) {
  heart.addEventListener("click", function () {
    const heartCount = Number(getId("heart-count").innerText);
    const count = heartCount + 1;
    getId("heart-count").innerText = count;
    getId("heart-count-mobile").innerText = count;
    return;
  });
}

// Call Buttons functionalities area here
const callBtn = document.getElementsByClassName("call-btn");
for (const btn of callBtn) {
  btn.addEventListener("click", function () {
    const serviceTitle =
      btn.parentNode.parentNode.parentNode.children[1].children[0].innerText;

    const serviceSubTitle =
      btn.parentNode.parentNode.parentNode.children[1].children[1].innerText;

    const serviceNumber =
      btn.parentNode.parentNode.parentNode.children[1].children[2].innerText;

    // coins cut here
    const totalCoins = Number(getId("coins").innerText);
    if (totalCoins < 20) {
      alert(
        "❌ আপনার অ্যাকাউন্টে পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।"
      );
      return;
    }
    const cutCoins = totalCoins - 20;
    getId("coins").innerText = cutCoins;
    getId("coins-mobile").innerText = cutCoins;

    // Calling Alert here
    const service = {
      title: serviceTitle,
      subTitle: serviceSubTitle,
      number: serviceNumber,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    };

    alert(`📞 Calling ${service.subTitle} ${service.number}...`);

    // Call History here
    const historyContainer = getId("history-container");

    // new Element create
    const newElement = document.createElement("div");
    newElement.innerHTML = `
        <div
            class="bg-[#FAFAFA] flex justify-between items-center p-4 rounded-lg mt-4 mb-2"
          >
            <div>
              <h1 class="text-[1rem] font-medium">
                ${service.title}
              </h1>
              <h3 class="text-[1.125rem] text-[#5C5C5C]">${service.number}</h3>
            </div>
            <span>${service.time}</span>
        </div>
    `;

    historyContainer.appendChild(newElement);
  });
}

// History btn CLEAR functionalities area here
getId("clear-btn").addEventListener("click", function () {
  getId("history-container").innerHTML = "";
});

// Challenge Part functionalities area here
const copyBtn = document.getElementsByClassName("copy-btn");
for (const Btn of copyBtn) {
  Btn.addEventListener("click", function () {
    const copyNumber =
      Btn.parentNode.parentNode.parentNode.children[1].children[2].innerText;

    navigator.clipboard.writeText(copyNumber);
    alert(`নম্বর কপি হয়েছেঃ ${copyNumber}`);
    const totalCopies = Number(getId("copy-count").innerText);
    const copyCount = totalCopies + 1;
    getId("copy-count").innerText = copyCount;
    getId("copy-count-mobile").innerText = copyCount;
  });
}
