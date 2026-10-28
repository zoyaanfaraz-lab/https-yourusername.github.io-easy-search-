
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
}

function quickSearch(query) {
    const input = document.getElementById("searchInput");

    if (input) {
        input.value = query;
        input.focus();
    } else {
        window.location.href =
            "https://duckduckgo.com/?q=" + encodeURIComponent(query);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("visitorName").value;
            const message = document.getElementById("visitorMessage").value;

            const preparedMessage =
                "EASY SEARCH Feedback\n" +
                "Name: " + name + "\n" +
                "Message: " + message;

            const output = document.getElementById("preparedMessage");
            output.value = preparedMessage;
            document.getElementById("feedbackResult").hidden = false;
        });
    }

    const copyButton = document.getElementById("copyButton");

    if (copyButton) {
        copyButton.addEventListener("click", async function () {
            const output = document.getElementById("preparedMessage");

            try {
                await navigator.clipboard.writeText(output.value);
                document.getElementById("copyStatus").textContent = "Copied!";
            } catch (error) {
                output.select();
                document.getElementById("copyStatus").textContent =
                    "Press Ctrl+C to copy the selected text.";
            }
        });
    }
});
