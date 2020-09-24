const url = 'https://opentdb.com/api.php?amount=5';

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  const arrayOfData = data.results;
  renderElement(arrayOfData);
}
getData(url);

function renderElement(data) {
  data.forEach((data) => {
    // create element
    const accordion = document.createElement('div');
    accordion.setAttribute('class', 'accordion');
    const accordionItem = document.createElement('div');
    accordionItem.setAttribute('class', 'accordion-item');
    const accordionHeader = document.createElement('div');
    accordionHeader.setAttribute('class', 'accordion-item-header');
    const accordionBody = document.createElement('div');
    accordionBody.setAttribute('class', 'accordion-item-body');
    //append child
    accordion.appendChild(accordionItem);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionBody);
    document.body.appendChild(accordion);

    // inject the data to the element

    accordionHeader.addEventListener('click', () => {
      accordionHeader.classList.toggle('active');
      if (accordionHeader.classList.contains('active')) {
        accordionBody.style.display = 'block';
      } else {
        accordionBody.style.display = 'none';
      }
    });
    //convert HTML entities into regural text
    const questios = data.question
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/>&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&Eacute;/g, 'é');
    const answer = data.correct_answer
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/>&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&Eacute;/g, 'é');
    accordionHeader.textContent = questios;

    accordionBody.textContent = answer;
  });
}
