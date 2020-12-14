"use strict";
//that will use to delete from youtube links
var videoLinkParts = [
    "https://www.youtube.com/watch?v=",
    "https://youtu.be/",
];
var firstFrame = {
    videoLink: "https://www.youtube.com/watch?v=lRCbU-IXny4&t=26s",
    classes: "w-100 position-absolute h-100",
    autoplay: true,
};
var getIframe = function (youtubeFrame) {
    //using to make easier youtube videos link adding to iframe
    for (var i = 0; i < videoLinkParts.length; i++) {
        //check if link have a strings from videoLinkParts array, if true = replace with https://www.youtube.com/embed/
        youtubeFrame.videoLink = youtubeFrame.videoLink.replace(videoLinkParts[i], "https://www.youtube.com/embed/");
    }
    // delete all string after symbol
    youtubeFrame.videoLink = youtubeFrame.videoLink.split("&")[0];
    return "<iframe class=\"" + youtubeFrame.classes + "\" style=\"top: 0; left: 0; z-index: -1;\"\n  src=\"" + youtubeFrame.videoLink + (youtubeFrame.autoplay == true ? "?autoplay=1" : "") + "\" frameborder=\"0\"\n  allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n</iframe>";
};
var videoBlock = document.getElementById("video-block");
videoBlock.addEventListener("click", function (e) {
    var target = e.target;
    var elementsToHide = target.parentNode.querySelectorAll("#preview, button");
    for (var i = 0; i < elementsToHide.length; ++i) {
        elementsToHide[i].classList.add("d-none");
    }
    target.parentNode.querySelector("#video").innerHTML += getIframe(firstFrame);
});
