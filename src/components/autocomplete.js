export const autoComplete = (event, terms) => {
    let str = event;
    let selectedTerms = [];
    for (let i = 0; i < terms.length; i++) {
      if (str !== undefined && str !== '') {
        if (terms[i].toLowerCase().includes(str.toLowerCase()) || terms[i].toUpperCase().includes(str.toUpperCase())) {
          selectedTerms.push(terms[i]);
        }
      }
    }
    return selectedTerms;
  };
  