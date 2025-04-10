// 
// Name: sona bijumon prasobha
// File: tulips.javascript
// Date: 08 April 2025
// Description: Toggle visibility of comments and support keyboard access
//

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-comments");
    const commentBox = document.getElementById("comments-section");
  
    toggleBtn.addEventListener("click", () => {
      const isHidden = commentBox.hasAttribute("hidden");
      if (isHidden) {
        commentBox.removeAttribute("hidden");
        toggleBtn.textContent = "Hide Comments";
      } else {
        commentBox.setAttribute("hidden", true);
        toggleBtn.textContent = "Show Comments";
      }
    });
  
    toggleBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        toggleBtn.click();
      }
    });
  });
  
