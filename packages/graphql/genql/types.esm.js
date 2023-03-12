export default {
    "scalars": [
        1,
        2,
        7
    ],
    "types": {
        "Article": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Mutation": {
            "createArticle": [
                0,
                {
                    "title": [
                        2,
                        "String!"
                    ],
                    "url": [
                        2,
                        "String!"
                    ]
                }
            ],
            "createNote": [
                4,
                {
                    "noteDate": [
                        2,
                        "String!"
                    ],
                    "title": [
                        2,
                        "String!"
                    ]
                }
            ],
            "createTask": [
                6,
                {
                    "taskDate": [
                        2,
                        "String!"
                    ],
                    "taskState": [
                        2,
                        "String!"
                    ],
                    "title": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Note": {
            "date": [
                2
            ],
            "id": [
                1
            ],
            "title": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "article": [
                0,
                {
                    "articleID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "articles": [
                0
            ],
            "note": [
                4,
                {
                    "noteID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "notes": [
                4
            ],
            "notesWithDate": [
                4,
                {
                    "noteDate": [
                        2,
                        "String!"
                    ]
                }
            ],
            "task": [
                6,
                {
                    "taskID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "tasks": [
                6
            ],
            "tasksWithDate": [
                6,
                {
                    "taskDate": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Task": {
            "date": [
                2
            ],
            "id": [
                1
            ],
            "state": [
                2
            ],
            "title": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}