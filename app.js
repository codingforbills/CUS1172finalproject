//Make sure to Update #queryvalues and match the values written in the HTML file
var URL = window.location.hostname;
var updateView = async (button) => {
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
  }
  if (button.dataset.query == "by_course_code") {
    let queryvalue = document.querySelector("#codeQuery").Value;
    api = "https://${URL}/api/by_course_code/${queryvalue}";
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


