getData(){
    fetch('http://localhost:8080/api/v1/books')
    .then(response=> response.json())
    .then(data=> console.log(data))
}

postData()
{
    fetch('http://localhost:8080/api/v1/books',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "status_code": 201,
            "status": "success",
            "data": [
            { "book": {
            "name": "My First Book",
            "isbn": "123-3213243567",
            "authors": [
            "John Doe"
            ],
            "number_of_pages": 350,
            "publisher": "Acme Books",
            "country": "United States",
            "release_date": "2019-08-01"
            } }
            ]
        })
    })
    .then(response=> response.json())
    .then(data=> console.log(data))
}

