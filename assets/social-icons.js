"use strict";
var socialIconClasses = [
    "fab fa-facebook-f",
    "fab fa-vk",
    "fab fa-steam",
    "fab fa-youtube",
    "fab fa-twitch",
    "fab fa-discord",
    "fab fa-teamspeak",
];
var SocialIconList = /** @class */ (function () {
    function SocialIconList(socialIconArray, ulElement) {
        this.socialIconsArray = socialIconArray;
        this.ulElement = ulElement;
    }
    SocialIconList.prototype.createSocialIconListInHTML = function () {
        var ulSelector = document.querySelectorAll(this.ulElement);
        for (var i = 0; i < ulSelector.length; ++i) {
            for (var j = 0; j < this.socialIconsArray.length; ++j) {
                ulSelector[i].innerHTML += "<li><a href=\"#\"><i class=\"" + this.socialIconsArray[j] + "\"></i></a></li>";
            }
        }
    };
    return SocialIconList;
}());
var firstListOfSocIcons = new SocialIconList(socialIconClasses, ".soc-nav");
firstListOfSocIcons.createSocialIconListInHTML();
