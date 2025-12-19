document.addEventListener("click", e => {
 const box = e.target.closest(".video-wrap");
 if (!box) return;
 const id = box.dataset.youtubeId;
 const iframe = document.createElement("iframe");
 iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
 iframe.width = "100%";
 iframe.height = "450";
 iframe.allow = "autoplay; encrypted-media";
 iframe.style.border = "none";
 box.innerHTML = "";
 box.appendChild(iframe);
});
