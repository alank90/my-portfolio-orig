// ================================================================ //
// ============ Javascript for modal operation ==================== //
// ================================================================ //
if (window.matchMedia("(max-width: 800px)").matches) {
  // the viewport is no more then 800 pixels wide so no modal
  const anchorElement = document.querySelector(".classInitials");
  anchorElement.setAttribute("href", "doc/resume.pdf");
  // Create and set a target attribute
  anchorElement.setAttribute("target", "_blank");
} else {
  // the viewport is greater than 800 pixels wide so add an
  // event listener to #initials element
  let iframeElement = document.querySelector("#iframeDisplay");
  document.getElementById("initials").addEventListener(
    "click",
    function () {
      // Make iFrame appear on click
      iframeElement.setAttribute("src", "doc/resume.pdf");
      document.getElementById("iframeDisplay").style.display = "block";
    },
    false
  );
  // getElementsByClassName actually returns an HTMLCollection,
  // even though you have only one element with that classname in DOM,
  // so you have to retrieve it with index 0. Alternatively,
  // since we only have one element with the classname, you can
  // safely use querySelector, which will return the first match element.
  const element = document.querySelector(".close");
  element.addEventListener(
    "click",
    function () {
      // Change iframe back to invisible and src to ""
      iframeElement.setAttribute("src", "");
      document.getElementById("iframeDisplay").style.display = "none";
    },
    false
  );
}

// ======== End Javascript for modal operation =================== //
