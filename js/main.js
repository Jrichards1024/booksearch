function bookSearch() {
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML.innerHTML = ""

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",

    success: (data) => {
      for(let i = 0; i < data.items.length; i++){
        results.innerHTML += "<h2>" + data.items[i].volumeinfo.title + "</h2>"
      }
    },
    type: 'GET'
  })
}
document.getElementById('button').addEventListener('click',bookSearch,false)
