document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
    // var pdfFile = document.getElementById("pdfFile").files[0];

    // Perform basic authentication (replace with your authentication logic)
    if (userId === "BGI_FACULITY" && password === "BGINOTES@123") {
      // Simulate file upload (replace with actual upload logic)
      setTimeout(function () {
        // document.getElementById("message").innerText =
        //   "PDF uploaded successfully!";
        window.location.href = "uploadform.html";
      }, 1500);
    } else {
      document.getElementById("message").innerText =
        "Incorrect credentials. Please try again.";
    }
  });
    