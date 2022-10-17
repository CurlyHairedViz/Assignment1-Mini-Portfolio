/*  File Name - app.ts
    Author - Viraj Shah
    Description - Typescript file for function calls of the webpage
*/
"use script";
(function () {
    // Function to load Header Navigation onto the webpage
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            $("header").html(html_data);
        });
    }
    /**
     * Function to load Projects onto the webpage
     *
     * @param {string} url
     */
    function LoadProjects(url) {
        // Count variable, which will be used during html injection of JSON data into html tag with specific id on webpage
        let count = 1;
        // Get data from JSON file in the given url
        $.getJSON(url, function (html_data) {
            // JQuery Foreach loop to get the data and set it in key value pair 
            $.each(html_data, function (key, value) {
                // for loop to access each value of JSON data list
                for (let data of value) {
                    // variables for html tag creation
                    const p = document.createElement("p");
                    const heading3 = document.createElement("h3");
                    const projectDiv = document.createElement("div");
                    // Class list addition
                    projectDiv.classList.add(`ProjectDetails${count}`);
                    heading3.classList.add("card-title");
                    p.classList.add("card-text");
                    // Adding ProjectName value of JSON file to declared variables and appending it to element on the webpage
                    $(heading3).html(data.ProjectName);
                    $(projectDiv).append(heading3);
                    $(`#Project${count}`).append(projectDiv);
                    // Adding ProjectDescription value of JSON file to declared variables and appending it to element on the webpage
                    $(p).html(data.ProjectDescription);
                    $(projectDiv).append(p);
                    $(`#Project${count}`).append(projectDiv);
                    count++;
                }
            });
        });
    }
    /**
     * Function to load abouts section onto the webpage
     *
     * @param {string} url
     */
    function LoadAbout(url) {
        $.getJSON(url, function (html_data) {
            let aboutMe = html_data.Description;
            $("#AboutDesc").html(aboutMe);
        });
    }
    function formSubmit() {
        window.alert("Thank You! We will contact you shortly.");
    }
    // Main function to call all other methods
    function Start() {
        console.log("Project started!");
        LoadHeader();
        LoadProjects("./Data/projects.json");
        LoadAbout("./Data/about.json");
        let form = document.getElementById("formSubmit");
        $(form).on("submit", formSubmit);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map