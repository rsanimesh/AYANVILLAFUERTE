$(document).ready(function() {
    function createImgTags(img_path) {
        return `<img src="${img_path}" class="img-fluid my-2">`
    }

    function loadGallery(page) {

        let pageData = load_data[page]
        if (typeof pageData != 'undefined') {

            // Set the h3 tag with the name of page/image section 
            document.getElementById("pageName").innerHTML = pageData.title;

            // load images from the  request section folder
            let image_html = pageData.images.map(createImgTags).join("");

            let pageImagesDiv = document.getElementById("pageImages");
            pageImagesDiv.innerHTML = image_html;

        } else {
            console.error("Page not defiend in json: " + String(page));
        }

    }

    function getParams() {
        var idx = document.URL.indexOf('?');
        var params = new Array();
        if (idx != -1) {
            var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
            for (var i = 0; i < pairs.length; i++) {
                nameVal = pairs[i].split('=');
                params[nameVal[0]] = nameVal[1];
            }
        }
        return params;
    }

    let params = getParams();
    let page = unescape(params["page"]);
    loadGallery(page);
});