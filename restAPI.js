/*
Robert Bills
05.05.21
CUS1172 - Assignment 4
SJU CUS Course Delievery 

Self- Note: This portion requires you to enter npm install express to work

Checklist:

Routes
Code Route {√}
Title Route {√} GET THE TITLE!!!!!
Professor Route {√}
Course Level Route {√}
Professor & Course Level {√}

Checklist:

Routes
Code Route {√}
Title Route {√} GET THE TITLE!!!!!
Professor Route {√}
Course Level Route {√}
Professor & Course Level {√}



*/

var express = require("express");
var cors = require('cors');
var app = express();



const fs = require('fs');
const {
    parse
} = require("path");
let rawdata = fs.readFileSync('./course.json');
let course = JSON.parse(rawdata);

//This set Defines the Routes necessary
app.get('/api', (req, res) => {
    let outputJSON = {
        course: course["course"]
    }
    res.JSON(outputJSON);
})
// CCode Route
app.get('/api/by_Course_C/:qcode', (req, res) => {
    let query = req.params['qcode']
    coursefiltered = course["course"].filter(q => q.Course_C.includes(query))
    let outputJSON = {
        courses: coursefiltered
    }
    res.json(outputJSON);
})

// Title Route
app.get('/api/by_Title/:qtitle', (req, res) => {
    let query = req.params['qtitle']
    coursefiltered = course["course"].filter(q => q.Title.includes(query))
    let outputJSON = {
        courses: coursefiltered
    }
    res.json(outputJSON);
})
//Professor Route
app.get('/api/by_Professor/:qname', (req, res) => {
    let query = req.params['qname']
    coursefiltered = course["course"].filter(q => q.Professor.includes(query))
    let outputJSON = {
        courses: coursefiltered
    }
    res.json(outputJSON);
})

//Course Level
app.get('/api/by_Course_L/:qlvl', (req, res) => {
    let query = req.params['qlvl']
    coursefiltered = course["course"].filter(q => q.Course_L.includes(query))
    let outputJSON = {
        courses: coursefiltered
    }
    res.json(outputJSON);
})
// Professor & Level
app.get('/api/by_NM_n_LV/:qname/:qlvl', (req, res) => {
    let Name = req.params['qname']
    let level = req.params['qlvl']
    coursefiltered = course["course"].filter(
        q => {
            if ((q.professor.includes(Name)) && (q.Course_L.includes(level))) {
                return true;
            }
            return false;
        }
    );
    let outputJSON = {
        courses: coursefiltered
    }
    res.json(outputJSON);
})
app.use('/demo', express.static('/Front_End')); //FE stands for "Front End"

//Initiate Server

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Server Connected! Running... ${port}')
});