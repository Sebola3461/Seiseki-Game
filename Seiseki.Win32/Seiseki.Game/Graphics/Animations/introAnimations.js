async function animateWorkInProgressIntro() {
    const warn_modal = document.getElementById("work-in-progress-modal")
    const warn_text = document.getElementById("warn-title")
    const warn_subtitle = document.getElementById("work-in-progress-title")
    const warn_disclaimer = document.getElementById("work-in-progress-warn")
    warn_text.style.fontSize = "45px";
    setTimeout(function(){
        warn_subtitle.style.opacity = "1";
        },1000)
    setTimeout(function(){
        warn_subtitle.style.transition = "all 1350ms cubic-bezier(0.12, 0.74, 0.58, 1) 0s";
        warn_subtitle.style.letterSpacing = "0.5vw";
        warn_subtitle.style.paddingTop = "2vh"
    },990)
    setTimeout(function(){
        warn_subtitle.style.transition = "all 1200ms cubic-bezier(0.12, 0.74, 0.58, 1) 0s";
        warn_disclaimer.style.opacity = "1";
    },2500)
    setTimeout(function(){
        warn_modal.style.transition = "linear 700ms";
        warn_text.style.transition = "linear 700ms";
        warn_subtitle.style.transition = "linear 700ms";
        warn_text.style.opacity = "0";
        warn_subtitle.style.opacity = "0";
        warn_disclaimer.style.opacity = "0";
        warn_modal.style.opacity = "0";
    },5000)
    setTimeout(function(){
        warn_modal.remove()
    },6800)
}

module.exports.animateWorkInProgressIntro = animateWorkInProgressIntro;