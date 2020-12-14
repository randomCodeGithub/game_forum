const socialIconClasses: string[] = [
  "fab fa-facebook-f",
  "fab fa-vk",
  "fab fa-steam",
  "fab fa-youtube",
  "fab fa-twitch",
  "fab fa-discord",
  "fab fa-teamspeak",
];

class SocialIconList {
  ulElement: string;
  socialIconsArray: string[];

  constructor(socialIconArray: string[], ulElement: string) {
    this.socialIconsArray = socialIconArray;
    this.ulElement = ulElement;
  }

  public createSocialIconListInHTML() {
    let ulSelector = <any>document.querySelectorAll(this.ulElement);

    for (let i = 0; i < ulSelector.length; ++i) {
      for (let j = 0; j < this.socialIconsArray.length; ++j) {
        ulSelector[
          i
        ].innerHTML += `<li><a href="#"><i class="${this.socialIconsArray[j]}"></i></a></li>`;
      }
    }
  }
}

let firstListOfSocIcons = new SocialIconList(socialIconClasses, ".soc-nav");
firstListOfSocIcons.createSocialIconListInHTML();
