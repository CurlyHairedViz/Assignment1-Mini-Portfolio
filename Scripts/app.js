"use script";
(function () {
    // function LoadData(method: string, url: string, callback: Function): void
    // {
    //     let XHR = new XMLHttpRequest();
    //     XHR.open(method, url);
    //     XHR.send();
    //     XHR.addEventListener("readystatechange", function(){
    //         if ((XHR.status == 200) && (XHR.readyState == 4))
    //         {
    //             callback(XHR.responseText);
    //         }
    //     })
    // }
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            $("header").html(html_data);
        });
        $(window).on("resize", function () {
            if ($(window).width() <= 992) {
                console.log($(window).width());
                $("#mainNav").removeClass("fixed-bottom").addClass("fixed-top");
            }
            else {
                $("#mainNav").removeClass("fixed-top").addClass("fixed-bottom");
            }
        });
    }
    function LoadFooter() {
        $.get("./Views/components/footer.html", function (html_data) {
            $("footer").html(html_data);
        });
    }
    // function LoadContent(): void 
    // {
    //     $.get("./Views/content/", function(html_data){
    //         $("main").html(html_data);
    //     });
    // }
    function Start() {
        console.log("Project started!");
        LoadHeader();
        LoadFooter();
        // console.log(window.screen.availWidth);
        // let contactList;
        // $.getJSON("./Data/contacts.json", function(DataSource){
        //     contactList = DataSource.ContactList;
        //     let contact = new Contact();
        //     // console.log(contact.toString());
        // })
        //localStorage.setItem("0", "Viraj");
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map