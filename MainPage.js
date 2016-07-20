// JavaScript source code
function main() {
    updateContentPanel(document.getElementById("page1"), 4);

    //Always make dialogs last
    confirm("This page is currently under construction. Thanks for Visiting though!");

}

function getPostData() {
    //Gets the post data to display on screen

    //find the number of appropriate pages to make, then append page numbers
    //<li onclick="switchPage(contentPagination, this)"> number </li>
}

function switchPage(list, elem, contentPanel) {

    var listItems = list.getElementsByTagName("li");

    for (i = 0; i < listItems.length; i++) {
        if (listItems[i].className == "active") {
            listItems[i].classList.remove("active");
        }
    }

    elem.classList.add("active");

    var pageList = document.getElementsByClassName("pagebody");
    for (i = 0; i < pageList.length; i++) {
        pageList[i].classList.add("hidden");
        pageList[i].classList.remove("unhidden");
        pageList[i].innerHTML = "";
    }

    contentPanel.classList.remove("hidden");
    contentPanel.classList.add("unhidden");

    updateContentPanel(contentPanel, 9);
}

function updateContentPanel(contentPanel, postAmt) {


    createBlogPost(contentPanel, "Hello World", "7/20/16", "Hello World, This is my first Blog Post (I dont like front end development...)");


    //TODO: remove post amt
    for (i = 0; i < postAmt; i++) {
        createLoremIpsumPost(contentPanel);
    }
}

function createBlogPost(contentPanel, title, date, body) {
    var data = "";
    data += "<section id=\"blog1\">";
    data += "<h1 id=\"postTitle\">"
    data += title
    data += "<\/h1>";
    data += "<div id=\"postInfo\">";
    data += "<h4> Date:";
    data += date
    data += "<\/h4>";
    data += "<\/div>";
    data += "<p>";
    data += body
    data += "<\/p>";
    data += "<\/section>";

    contentPanel.innerHTML += data;
}

function createLoremIpsumPost(contentPanel) {
    var data = "";
    data += "<section id=\"blog1\">";
    data += "";
    data += "                    <h1 id=\"postTitle\">This Is An Auto Generated Blog Post<\/h1>";
    data += "";
    data += "                    <div id=\"postInfo\">";
    data += "                        <h4>";
    data += "                            Date: 7\/20\/16";
    data += "                        <\/h4>";
    data += "                    <\/div>";
    data += "";
    data += "                    <p>";
    data += "                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum tristique efficitur. In molestie maximus tincidunt. Phasellus suscipit eu elit sed vehicula. Pellentesque sapien nibh, posuere non ex sed, pulvinar semper metus. Curabitur id leo mi. Vestibulum tortor magna, volutpat eu neque nec, cursus volutpat metus. Aenean at tempor ante. Pellentesque ullamcorper eu orci non semper. Nulla facilisi.";
    data += "                        Mauris lacinia pretium risus, a maximus magna. Sed vitae porttitor neque, in pulvinar mi. Quisque semper, leo a volutpat porta, ligula quam blandit ante, eu ullamcorper nunc justo in arcu. Vivamus non eleifend mauris. In magna nulla, maximus nec elit et, luctus suscipit odio. Fusce egestas leo non commodo pulvinar. Integer laoreet nibh neque, mollis sodales tortor accumsan ut. Nulla non finibus odio. Sed laoreet, ligula sed bibendum scelerisque, lacus ipsum volutpat nunc, ac tincidunt eros massa ac diam.";
    data += "                        Aliquam erat volutpat. Donec lectus dui, efficitur eu sodales a, sollicitudin in diam. Aliquam interdum sodales velit, eu vulputate augue laoreet tincidunt. In risus purus, egestas a tortor ut, pulvinar suscipit mi. Mauris a velit consequat, pulvinar justo porta, malesuada tortor. Phasellus lorem dolor, rhoncus vitae porta vitae, mattis eu est. Maecenas placerat interdum diam, quis convallis neque placerat vel. Fusce turpis erat, scelerisque in pellentesque vel, sodales ac metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non nisi ligula. Etiam vulputate, turpis sit amet laoreet maximus, nisi sem pharetra purus, ac interdum lorem metus vel tortor.";
    data += "                        Vestibulum vestibulum rutrum congue. Integer in vehicula arcu, ac consectetur ligula. Nam bibendum mi et augue dignissim sollicitudin. Ut sit amet volutpat nunc. Nullam ac leo massa. Mauris vitae hendrerit neque. Vestibulum ornare dignissim finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed viverra dapibus odio, vel faucibus tortor mollis laoreet. Mauris venenatis dignissim nunc, nec fringilla mi posuere a. Praesent congue posuere aliquet. In hac habitasse platea dictumst.";
    data += "                        Etiam eleifend metus sem, eu semper mi aliquet non. Morbi vel metus at ante rhoncus varius non in felis. Integer tincidunt suscipit lectus ut finibus. Proin bibendum nisl ligula, in facilisis dolor viverra eu. Donec mollis metus ac neque tempus, ut aliquam ex sodales. Etiam eu imperdiet tortor. Morbi semper erat ultricies, pharetra tellus nec, rhoncus lacus. Donec et nulla suscipit, semper libero ut, hendrerit arcu. Vivamus vel sem id lacus sollicitudin scelerisque. Duis dapibus sit amet felis vestibulum placerat. Aenean ac mauris ut odio sodales porta. Integer at lectus lacinia nulla consequat dictum.";
    data += "                    <\/p>";
    data += "                <\/section>";

    contentPanel.innerHTML += data;
}
