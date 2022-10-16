"use script";

(function()
{

    function LoadHeader(): void 
    {
        $.get("./Views/components/header.html", function(html_data){

            $("header").html(html_data);
        });

        // $(window).on("resize", function(){
            
        //     if ($(window).width() <= 992)
        //     {
        //         $("#mainNav").removeClass("fixed-bottom").addClass("fixed-top");
        //     }
        //     else{
        //         $("#mainNav").removeClass("fixed-top").addClass("fixed-bottom");
        //     }
        // });
        
    }

    
    function LoadFooter(): void 
    {
        $.get("./Views/components/footer.html", function(html_data){

            $("footer").html(html_data);

        });
    }

    function LoadProjects(url: string): void 
    {
        let count = 1;
        $.getJSON(url, function(html_data)
        {
            $.each(html_data, function (key, value){
                
                for (let data of value) {
                    
                    const p = document.createElement("p");
                    const heading3 = document.createElement("h3");
                    const projectDiv = document.createElement("div");
                    
                    projectDiv.classList.add(`ProjectDetails${count}`);
                    heading3.classList.add("card-title");
                    p.classList.add("card-text");

                    $(heading3).html(data.ProjectName);
                    $(projectDiv).append(heading3);
                    $(`#Project${count}`).append(projectDiv);

                    $(p).html(data.ProjectDescription);
                    $(projectDiv).append(p);
                    $(`#Project${count}`).append(projectDiv);

                    count++;
                }  
            });
        });

    }

    function LoadAbout(url: string): void 
    {
        $.getJSON(url, function(html_data)
        {
            let aboutMe = html_data.Description;

            $("#AboutDesc").html(aboutMe);
        });
    }

    function Start() {
    
        console.log("Project started!");

        LoadHeader();

        // LoadFooter();
        
        LoadProjects("./Data/projects.json");
        LoadAbout("./Data/about.json");


    }

    window.addEventListener("load", Start);

})();