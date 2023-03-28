
# News API 

This API build for Teaching Factory SMK Telkom Malang with Digital Bussiness and Technology (DBT)

## Author

- Prayoga Adi Setyawann [@setyawann](https://www.github.com/setyawannn)



## Technology
- Node JS
- MongoDB
- Express


## Support

- Muhammad Kafanal Kafi [@kkafi09](https://www.github.com/kkafi09)
- Reyhan Marsalino Diansa [@ReyhanDiansa](https://www.github.com/ReyhanDiansa)
- Zhidan Marties Alfareza [@lakyulakyu](https://www.github.com/lakyulakyu)
- Zaskia Rizky Raichand [@kiaaa22](https://www.github.com/kiaaa22)
- Undefined Malang [@undefinedMLG](https://github.com/undefinedMLG)
- Ciboox Indonesia [@Ciboox Indonesia](https://github.com/ciboox-id)



# API Spec
Api specification for news production

## Base URL
``` 
https://undefinednews.vercel.app/
```

## Create Tour

Request :
- Method : POST
- Endpoint : `/api/v2/news/`
```json 
{
    "title" : "string",
    "author" : [
        {
        "name": "string",
        "desc" : "string",
        "image" : "string",
        "verified" : "boolean",
        }
    ],
    "category" : "string",
    "image" : "string",
    "content" : "string",
    "time" : "string",
    "tags" : "string",
    "date" : "string"
}
```

Response :

```json 
{
    "title": "string",
    "author": [
        {
            "name": "string",
            "desc": "string",
            "image": "string",
            "verified": "boolean",
            "_id": "string"
        }
    ],
    "category": "string",
    "image": "string",
    "content": "string",
    "time": "string",
    "tags": "string",
    "date": "string",
    "_id": "string",
    "createdAt": "string",
    "updatedAt": "string",
}
```

## Get all news

Request :
- Method : GET
- Endpoint : `/api/v2/news/`

Response :

```json 
{
    "title" : "string",
    "author" : [
        {
        "name": "string",
        "desc" : "string",
        "image" : "string",
        "verified" : "boolean",
        }
    ],
    "category" : "string",
    "image" : "string",
    "content" : "string",
    "time" : "string",
    "tags" : "string",
    "date" : "string"
}
```

## Get single news

Request :
- Method : GET
- Endpoint : `/api/v2/news/{id}`

Response :

```json 
{
    "title" : "string",
    "author" : [
        {
        "name": "string",
        "desc" : "string",
        "image" : "string",
        "verified" : "boolean",
        }
    ],
    "category" : "string",
    "image" : "string",
    "content" : "string",
    "time" : "string",
    "tags" : "string",
    "date" : "string"
}
```

## Get by category

Request :
- Method : GET
- Endpoint : `/api/v2/news/?category={category}`

Response :

```json 
{
    "title" : "string",
    "author" : [
        {
        "name": "string",
        "desc" : "string",
        "image" : "string",
        "verified" : "boolean",
        }
    ],
    "category" : "string",
    "image" : "string",
    "content" : "string",
    "time" : "string",
    "tags" : "string",
    "date" : "string"
}
```

## Get by search

Request :
- Method : GET
- Endpoint : `/api/v2/news/?search={search}`

Response :

```json 
{
    "title" : "string",
    "author" : [
        {
        "name": "string",
        "desc" : "string",
        "image" : "string",
        "verified" : "boolean",
        }
    ],
    "category" : "string",
    "image" : "string",
    "content" : "string",
    "time" : "string",
    "tags" : "string",
    "date" : "string"
}
```

## Get by category & search

Request :
- Method : GET
- Endpoint : `/api/v2/news/?category={category}&search={search}`

Response :

```json 
{
    "title" : "string",
    "author" : [
        {
        "name": "string",
        "desc" : "string",
        "image" : "string",
        "verified" : "boolean",
        }
    ],
    "category" : "string",
    "image" : "string",
    "content" : "string",
    "time" : "string",
    "tags" : "string",
    "date" : "string"
}
```

## Update tour

Request :
- Method : PUT
- Endpoint : `/api/v2/news/{id}`
- Body :

```json 
{
    "title" : "string",
    "author" : [
        {
        "name": "string",
        "desc" : "string",
        "image" : "string",
        "verified" : "boolean",
        }
    ],
    "category" : "string",
    "image" : "string",
    "content" : "string",
    "time" : "string",
    "tags" : "string",
    "date" : "string"
}
```

Response :

```json 
{
    "title": "string",
    "author": [
        {
            "name": "string",
            "desc": "string",
            "image": "string",
            "verified": "boolean",
            "_id": "string"
        }
    ],
    "category": "string",
    "image": "string",
    "content": "string",
    "time": "string",
    "tags": "string",
    "date": "string",
    "_id": "string",
    "createdAt": "string",
    "updatedAt": "string",
}
```

## Delete Product

Request :
- Method : DELETE
- Endpoint : `/api/v2/news/{id}`

Response :

```json 
{
    "message" : "string"
}
```
