
document.addEventListener('DOMContentLoaded',function(){

  document.getElementById('journalForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const journalInput = document.getElementById('journalInput');
    const journalEntries = document.getElementById('journalEntries');
  });
});

const newEntry = document.createElement('li');
newEntry.textContent = journalInput; // this is to create a new list item for the journal

journalEntries.insertBefore(newEntry, journalEntries.firstChild);  
// adds a new entery at the top of the list

document.getElementById('journalInput').value = '';
// clear the input

function openFreeWrite() {
    // Show the free write form
    document.getElementById('journalFormContainer').style.display = 'block';
}

function openJournalPrompt() {
  // Show the journal prompt form
  document.getElementById('journalFormContainer').style.display = 'block';
}
  function openJournalPrompt() {
    // Show the journal prompt form
    document.getElementById('journalFormContainer').style.display = 'block';
  }


  

  function addItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem) {
        const ul = document.getElementById('checklist');
        const li = document.createElement('li');
        li.innerHTML = `<span>${newItem}</span> <button onclick="toggleCheck(this)">✔️</button>`;
        ul.appendChild(li);
        document.getElementById('newItem').value = '';
    }
  }

    function toggleCheck(button) {
      const li = button.parentElement;
      li.classList.toggle('checked');
    }

    function showPage(pageId) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
    }

    function clearChecklist() {
      const ul = document.getElementById('checklist');
      ul.innerHTML = '';
    }
  function showPage(pageId) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
  }