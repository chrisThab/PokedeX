function toggleDialog(){
  document.getElementById('bodyOverlay').classList.toggle('dialogVisible');
  document.getElementById('detailView').classList.toggle('dialogVisible');
}

const searchInput = document.getElementById('searchFor');
searchInput.addEventListener('input', e =>{
  const value = e.target.value;
  console.log(value);

})
// async function search(searchString) {
//   console.log(`Searchstring: ${searchString}`);
//   let found = await fetch(BASE_URL + path);
//   let foundJson = await found.text();
// }