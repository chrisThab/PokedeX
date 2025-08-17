function toggleDialog(){
  document.getElementById('bodyOverlay').classList.toggle('dialogVisible');
  document.getElementById('detailView').classList.toggle('dialogVisible');
}

async function search(searchString) {
  console.log(`Searchstring: ${searchString}`);
  let found = await fetch(BASE_URL + path);
  let foundjso
}