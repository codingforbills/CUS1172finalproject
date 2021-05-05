//Make sure to Update #queryvalues and match the values written in the HTML file
var URL = window.location.hostname;
var updateView = async (button) => {
  //Code Query
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  //Professor & Level
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  //Title Query
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  //Course Code Query (OK!)
  if (button.dataset.query == "by_course_C") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_Course_C/${queryvalue}";
  }
  //Professor Query (OK!)
  if (button.dataset.query == "by_professor") {
    let queryvalue = document.querySelector("#professorQuery").Value;
    api = "https://${URL}/api/by_professor/${queryvalue}";
  }
  //Course Level Query (OK!)
  if (button.dataset.query == "by_course_lvl") {
    let queryvalue = document.querySelector("#lvlQuery").Value;
    api = "https://${URL}/api/by_course_lvl/${queryvalue}";
  }
  const data = await fetch(api);
  const model = await data.json();
  render(model);
}

var render = (model) => {
    var source = document.querySelector("#results_view").innerHTML;
    var template = Handlebars.compile(source);
    var HTML = template(model);
    document.querySelector("#results").innerHTML = HTML;
}


