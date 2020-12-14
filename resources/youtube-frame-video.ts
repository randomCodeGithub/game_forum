//that will use to delete from youtube links
const videoLinkParts: string[] = [
  "https://www.youtube.com/watch?v=",
  "https://youtu.be/",
];

// iframe interface for youtube videos
interface IYoutubeFrame {
  videoLink: string;
  classes: string;
  autoplay: boolean;
}

const firstFrame: IYoutubeFrame = {
  videoLink: "https://www.youtube.com/watch?v=lRCbU-IXny4&t=26s",
  classes: "w-100 position-absolute h-100",
  autoplay: true,
};

const getIframe = (youtubeFrame: IYoutubeFrame): string => {
  //using to make easier youtube videos link adding to iframe
  for (let i = 0; i < videoLinkParts.length; i++) {
    //check if link have a strings from videoLinkParts array, if true = replace with https://www.youtube.com/embed/
    youtubeFrame.videoLink = youtubeFrame.videoLink.replace(
      videoLinkParts[i],
      "https://www.youtube.com/embed/"
    );
  }
  // delete all string after symbol
  youtubeFrame.videoLink = youtubeFrame.videoLink.split("&")[0];

  return `<iframe class="${
    youtubeFrame.classes
  }" style="top: 0; left: 0; z-index: -1;"
  src="${youtubeFrame.videoLink}${
    youtubeFrame.autoplay == true ? "?autoplay=1" : ""
  }" frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>`;
};

const videoBlock = document.getElementById("video-block") as HTMLElement;

videoBlock.addEventListener("click", (e) => {
  const target = e.target! as HTMLElement;
  let elementsToHide = target.parentNode.querySelectorAll("#preview, button");

  for (let i = 0; i < elementsToHide.length; ++i) {
    elementsToHide[i].classList.add("d-none");
  }
  target.parentNode.querySelector("#video").innerHTML += getIframe(firstFrame);
});
