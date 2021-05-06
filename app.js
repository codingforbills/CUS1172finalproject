//Make sure to Update #queryvalues and match the values written in the HTML file
var URL = window.location.hostname;
var updateView = async (button) => {
  //Title Query
  if (button.dataset.query == "by_title") {
    let queryvalue = document.querySelector("#titleQuery").value;
    api = "https://${URL}/api/by_title/${queryvalue}";
  }
  //Course Code Query (OK!)
  if (button.dataset.query == "by_course_C") {
    let queryvalue = document.querySelector("#codeQuery").value;
    api = "https://${URL}/api/by_course_C/${queryvalue}";
  }
  //Professor Query (OK!)
  if (button.dataset.query == "by_professor") {
    let queryvalue = document.querySelector("#profQuery").value;
    api = "https://${URL}/api/by_professor/${queryvalue}";
  }
  //Course Level Query (OK!)
  if (button.dataset.query == "by_course_lvl") {
    let queryvalue = document.querySelector("#lvlQuery").value;
    api = "https://${URL}/api/by_course_lvl/${queryvalue}";
  }
  //Professor & Level
  if (button.dataset.query == "by_NM_n_LV") {
    let queryvalue = document.querySelector("queryNMnLV").value;
    api = "https://${URL}/api/by_NM_n_LV/${queryvalue}";
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


