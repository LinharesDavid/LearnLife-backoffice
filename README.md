# ***LearnLife-BackOffice***

The BackOffice used for all LearnLife applications routes.

# ***How to***

## Models
    * User
    * Challenge
    * Badge
    * Token
    * Category
    * Tag
    * UserChallenge

## User

***Create***

> *Route [POST] : '/users'*

*Body*

    {
        "lastname": "theLastName",
        "firstname": "TheFirstName",
        "email": "email@domain.com",
        "password": "thePassword"
    }

*Answer*

    {
    "__v": 0,
    "lastname": "david2",
    "firstname": "david2",
    "email": "test2@test.com",
    "password": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
    "_id": "5af958974528d4ca305ebd92",
    "tags": [],
    "userChallenges": []
    }

***List***

> *Route [GET] : '/users'*


*Answer*

    [
        {
            "_id": "5af2bab59f367e8275d9a9d5",
            "lastName": "david",
            "firstName": "david",
            "email": "test@test.com",
            "__v": 0,
            "tags": [
                "5af2bc019f367e8275d9a9d9",
                "5af2bc099f367e8275d9a9da"
            ],
            "userChallenges": []
        },
        {
            "_id": "5af958974528d4ca305ebd92",
            "lastname": "david2",
            "firstname": "david2",
            "email": "test2@test.com",
            "__v": 0,
            "tags": [],
            "userChallenges": []
        }
    ]

***Show***

> *Route [GET] : '/users/:id'*


*Answer*

    {
        "_id": "5af2bab59f367e8275d9a9d5",
        "lastName": "david",
        "firstName": "david",
        "email": "test@test.com",
        "__v": 0,
        "tags": [
            "5af2bc019f367e8275d9a9d9",
            "5af2bc099f367e8275d9a9da"
        ],
        "userChallenges": []
    }

***Remove***

> *Route [DELETE] : '/users/:id'*


*Answer*

    OK

***Update***
> *Route [PUT] : '/users/:id'*

*Body*

    {
        "lastname": "theNewLastName",
        "firstname": "TheNewFirstName"
    }

*Answer*

    {
        "__v": 0,
        "lastname": "david2",
        "firstname": "david2",
        "email": "test2@test.com",
        "password": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
        "_id": "5af958974528d4ca305ebd92",
        "tags": [],
        "userChallenges": []
    }

## BADGE, CHALLENGE, CATEGORY, TAGS

*Same as user just replace '/users' by '/badges', '/challenges', '/tags', '/categories'.*

## UserChallenge

***Get***
> *Route [GET] : '/userChallenges/:id'*

**Warning** this is the **id** of the **user** for whom we want posters the **userChallenges**

*Answer*

    [
        {
            "_id": "5af2e91d5b620d8c73b67098",
            "user": "5af2bab59f367e8275d9a9d5",
            "challenge": {
                "_id": "5af2deaf66925886800ccf90",
                "name": "football",
                "pointsGiven": 100,
                "duration": 10000,
                "__v": 0,
                "tags": [
                    "5af2bc019f367e8275d9a9d9"
                ]
            },
            "__v": 0,
            "state": 0
        },
        {
            "_id": "5af64918f8ea89a967e1d379",
            "user": "5af2bab59f367e8275d9a9d5",
            "challenge": {
                "_id": "5af2bfb81bf7e084118dac59",
                "name": "three point shooter",
                "pointsGiven": 100,
                "duration": 10000,
                "__v": 0,
                "tags": [
                    "5af2bc099f367e8275d9a9da"
                ]
            },
            "__v": 0,
            "state": 0
        }
    ]

***declined***
> *Route [PUT] : '/userChallenges/:id/declined'*

*Answer*

    OK

***accept***
> *Route [PUT] : '/userChallenges/:id/accept'*

*Answer*

    OK
***Succeed***
> *Route [PUT] : '/userChallenges/:id/succeed'*

*Answer*

    OK
***Failed***
> *Route [PUT] : '/userChallenges/:id/failed'*

*Answer*

    OK
