const tds = document.querySelectorAll('td');
const tdsWithPartNumber = Array.from(tds).filter(td => /^.{5}-.{5}$/.test(td.innerText));

tdsWithPartNumber.forEach(td => {
  const partNumber = td.innerText;
  const searchablePartNumber = partNumber.replace('-', '');
  const href = `https://www.trodo.com/catalogsearch/result?q=${searchablePartNumber}&searchby=number`;
  const link = document.createElement('a');
  link.innerText = partNumber;
  link.href = href;
  link.target = '_blank';
  td.innerText = '';
  td.prepend(link);
});