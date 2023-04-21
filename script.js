let s = {
    "title":"GA Schedule",
    "type":"object",
    "properties": {
        "stringField": {
            "title":"Fields",
            "type":"string"
        },
      
        "startDate": {
            "title":"Start Date",
            "type":"string",
            "ui": {
                "editor":"date"
            }
        },
      
        "rotationStartDate": {
            "title":"Rotation Start Date",
            "type":"string",
            "ui": {
                "editor":"date"
            }
        },

      "rotationnumberStartDate": {
            "title":"Rotation Number Start Date",
            "type":"number",
            "minimum": 1,
            "maximum": 7,
            "ui": {
                "editor":"number"
            }
        },
      
        "rotationEndDate": {
            "title":"Rotation End Date",
            "type":"string",
            "ui": {
                "editor":"date"
            }
        },
      
      "endDate": {
            "title":"End Date",
            "type":"string",
            "ui": {
                "editor":"date"
            }
        },

      "scheduleDays": {
            "title":"Days",
            "type":"array",
            "items": {
                "$ref":"#/definitions/objectField"
            }
        }
    },

   "definitions": {
        "objectField": {
            "type":"object",
            "properties": {
                "Day of the Rotation": {
                    "type":"integer",
                    "minimum": 1,
                    "maximum": 7  
                },   
               "period1": {
                    "title":"Period 1",
                    "type":"string",
              },  
               "period2": {
                    "title":"Period 2",
                    "type":"string",
              },  
              "period3": {
                    "title":"Period 3",
                    "type":"string",
              },
                "period4": {
                    "title":"Period 4",
                    "type":"string",
              },
                "period5": {
                    "title":"Period 5",
                    "type":"string",
              },
              "period6": {
                    "title":"Period 6",
                    "type":"string",
              },
              "period7": {
                    "title":"Period 7",
                    "type":"string",
              },
              "period8": {
                    "title":"Period 8",
                    "type":"string",
              },
              "period9": {
                    "title":"Period 9",
                    "type":"string",
              },
            },

            "required": [
              "name",
              "type"
            ]
    },
      "API": {
            "type":"object",
            "properties": {
                "name": {
                    "type":"string"
                },
                "type": {
                    "type":"string",
                    "enum": [
                        "CREATE",
                        "READ",
                        "UPDATE",
                        "DELETE"
                    ]
                },
                "allowedFields": {
                    "type":"array",
                    "items": {
                        "type":"string"
                    }
                }
            }
        }
   }
}

let v = {
    "stringField":"Input",
    "startDate":"",
    "rotationStartDate":"",
    "rotationnumberStartDate" : "",
    "rotationEndDate": "",
    "endDate":"",

  "scheduleDays": [
      {
        "Day of the Rotation":"1",
        "period1":"B",
        "period2":"A",
        "period3" : "Break",
        "period4" : "C",
        "period5":"D",
        "period6":"H",
        "period7" : "Lunch",
        "period8":"Flex",
        "period9":"E"
            },
    {
        "Day of the Rotation":"2",
        "period1":"F",
        "period2":"E",
        "period3" : "Break",
        "period4" : "G",
        "period5":"A",
        "period6":"H",
        "period7" : "Lunch",
        "period8":"Flex",
        "period9":"B"
            },
    {
        "Day of the Rotation":"3",
        "period1":"C",
        "period2":"B",
        "period3" : "Break",
        "period4" : "D",
        "period5":"E",
        "period6":"Community Time",
        "period7" : "Lunch",
        "period8":"Flex",
        "period9":"F"
            },
    {
        "Day of the Rotation":"4",
        "period1":"G",
        "period2":"F",
        "period3" : "Break",
        "period4" : "A",
        "period5":"B",
        "period6":"H",
        "period7" : "Lunch",
        "period8":"Flex",
        "period9":"C"
            },
    {
        "Day of the Rotation":"5",
        "period1":"D",
        "period2":"C",
        "period3" : "Break",
        "period4" : "E",
        "period5":"F",
        "period6":"H",
        "period7" : "Lunch",
        "period8":"Flex",
        "period9":"G"
            },
    {
        "Day of the Rotation":"6",
        "period1":"A",
        "period2":"G",
        "period3" : "Break",
        "period4" : "B",
        "period5":"C",
        "period6":"Community Time",
        "period7" : "Lunch",
        "period8":"Flex",
        "period9":"D"
            },
    {
        "Day of the Rotation":"7",
        "period1":"E",
        "period2":"D",
        "period3" : "Break",
        "period4" : "F",
        "period5":"G",
        "period6":"H",
        "period7" : "Lunch",
        "period8":"Flex",
        "period9":"A"
            },
    ]
}

var myEditor = $("#jsonEditor").jsonEdit({
    "schema": s,
    "value": v,
    "afterValueChanged": function (newValue, newSchema) {
      $("#jsonValue").html(JSON.stringify(newValue, null, 2));
    },
    "afterWidgetCreated": function (newValue, newSchema) {
      $("#jsonValue").html(JSON.stringify(newValue, null, 2));
    },
    // expanding level
    // -1 = all levels
    expandingLevel: -1,

    // renders the first level as a container
    renderFirstLevel: 'false',

    // auto trims values
    autoTrimValues: 'true',

    // blank space
    indenting: 5,

    // captions when null
    radioNullCaption: 'null',
    selectNullCaption: '',

    // shows expand/collapse buttons
    treeExpandCollapseButton: 'true'  
});

// checks if is valid
myEditor.isValid();

// gets JSON schemas
myEditor.getSchema();

// gets values
let value = myEditor.getValue();

// sets values
myEditor.setValue(value);