const textArea = document.getElementById("inputText");
const statsDiv = document.getElementById("textStats");

function updateStats() {
  const text = textArea.value.trim();
  const wordCount = text === "" ? 0 : text.split(/\s+/).length;
  const charCount = text.length;
  statsDiv.innerText = `Words: ${wordCount} | Characters: ${charCount}`;
}

textArea.addEventListener("input", updateStats);

function toUpperCaseText() {
  textArea.value = textArea.value.toUpperCase();
  updateStats();
}

function toLowerCaseText() {
  textArea.value = textArea.value.toLowerCase();
  updateStats();
}

function removeExtraSpaces() {
  textArea.value = textArea.value.trim().replace(/\s+/g, ' ');
  updateStats();
}

function capitalizeSentences() {
  let text = textArea.value.toLowerCase();
  text = text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
    return c.toUpperCase();
  });
  textArea.value = text;
  updateStats();
}

function copyText() {
  textArea.select();
  document.execCommand("copy");
  alert("Text copied to clipboard!");
}

function clearText() {
  textArea.value = "";
  updateStats();
}
 
